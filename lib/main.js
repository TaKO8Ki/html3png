const puppeteer = require("puppeteer");
const yargs = require("yargs");
const fs = require("fs");

let argv = yargs
    .scriptName("html3png")
    .usage("$0 [args]")
    .example("$0 count -f foo.js", "count the lines in the given file")
    .alias("f", "file")
    .describe("f", "input file")
    .alias("o", "output")
    .default("o", "out.png")
    .describe("o", "output file")
    .alias("i", "id")
    .describe("i", "png clip")
    .alias("h", "help")
    .alias("v", "version")
    .demandOption(["f"])
    .string(["f", "o", "i"])
    .help("h").argv;

let inputName = argv["f"];
let outputName = argv["o"];
let id =
    Object.keys(argv).indexOf("i") !== -1 && argv["i"] !== ""
        ? argv["i"]
        : null;

(async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    try {
        let html = fs.readFileSync(inputName, "utf8");
        let string = Buffer.from(html).toString("base64");
        const page = await browser.newPage();
        await page.goto(`data:text/html;charset=UTF-8;base64,${string}`);
        // get a dom which have flag id
        if (id) {
            const clip = await page.evaluate((s) => {
                const el = document.querySelector(s);
                const {
                    width,
                    height,
                    top: y,
                    left: x,
                } = el.getBoundingClientRect();
                return { width, height, x, y };
            }, `#${id}`);
            await page.screenshot({ clip, path: outputName });
            return;
        }
        await page.screenshot({ path: outputName });
    } catch (err) {
        if (err.code == "ENOENT") {
            console.error("no such file or directory, %s", inputName);
        }
    } finally {
        browser.close();
    }
})();
