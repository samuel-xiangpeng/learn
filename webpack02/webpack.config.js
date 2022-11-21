const path = require("path")

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./newsTV"),
        library: {
            name: "SAMUEL",
            type: "umd"
        },
        clean: true,
    }
}

module.exports = config