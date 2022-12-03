const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HTMLWebpackPlugin({
    title: "打包Typescript开发环境🛀",
    template: path.resolve(__dirname, '../public/index.html')
})
module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "../src/index.tsx"),
    },
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "../build"),
        clean: true,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                loader: require.resolve("svg-sprite-loader"),
                include: path.resolve(__dirname, "../src/icons"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
                options: {
                    symbolId: "icon-[name]", //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
                },
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 8192,
                    },
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "iconfont/",
                    },
                },
            },
            {
                test: /\.(mp4|MP4)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 0,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDom",
    // },
    plugins: [
        htmlWebpackPlugin
    ],
    devServer: {
        client: {
            progress: true,
            logging: "info",
        },
        /* 是否启动compress压缩 */
        compress: true,
        /* 是否启动热更新 */
        hot: true,
        port: 30000,
        /* 开启服务是否自打开浏览器页签 */
        open: false,
        /* 打开http://localhost:30000/my-page */
        // open: ['/my-page'],
    }
}