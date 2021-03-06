# html3png

![](https://github.com/TaKO8Ki/html3png/workflows/CI/badge.svg)　![](https://img.shields.io/npm/dt/html3png.svg)　![](https://img.shields.io/npm/l/html3png)

html3png is a CLI for converting HTML to PNG. If you set --id flag, you can clip your HTML and convert it to PNG.

<!-- TOC -->

-   [html3png](#html3png)
    -   [Installation](#installation)
    -   [Flags](#flags)
    -   [Usage](#usage)
        -   [Convert HTML to PNG](#convert-html-to-png)
        -   [Convert clippted HTML to PNG](#convert-clippted-html-to-png)

<!-- /TOC -->

## Installation

You can install via npm.

```sh
$ npm install -g html3png
```

## Flags

```
html3png [args]

Options:
-f, --file Input file [string][required]
-o, --output Output file [string][default: "out.png"]
-i, --id Clip img [string]
-h, --help Show help [boolean]
-v, --version Show version number [boolean]

Examples:
html3png -f example.html -o out.png
```

## Usage

[exapmle.html](https://github.com/TaKO8Ki/html3png/blob/master/example.html)

### Convert HTML to PNG

```sh
# convert target html file to png.
# you can set output file name.
$ html3png -f example.html -o example.png
```

![1](https://user-images.githubusercontent.com/41065217/82092663-afb21a80-9734-11ea-9dac-3bd40590e0ca.png)

### Convert clippted HTML to PNG

[exapmle.html](https://github.com/TaKO8Ki/html3png/blob/master/example.html)

```sh
# if you use id flag, you can convert html inside a element with id you give to png.
$ html3png -f example.html -i image
```

![2](https://user-images.githubusercontent.com/41065217/82091252-fb16f980-9731-11ea-8d11-e62c99830703.png)
