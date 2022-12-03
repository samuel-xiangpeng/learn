const path = require("path")

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: true,
        pathinfo: false,
    },
}

module.exports = config;