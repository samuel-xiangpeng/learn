const path = require("path");

/* 配置文件 */
const config = (props) => {
    console.log("webpack配置文件", props)
    return {
        mode: "development",
        entry: "./src/index.js",
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, './dist'),
            clean: true,
        }
    }
}

module.exports = config;