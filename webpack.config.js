const path = require("path");

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: "bundle",
        path: path.join(__dirname, "build"),
    },
    target: "node",
};
