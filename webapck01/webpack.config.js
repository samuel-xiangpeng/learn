const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin");
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
/* 打包分析工具🔧 */
const BUNDLEAnalyzerPlugin = new BundleAnalyzerPlugin()
/* 自动生成HTML文件引入资源的插件 */
const HTMLWebpackPlugin =  new htmlWebpackPlugin({
    title: "Development"
});
console.log()
/* 生成stats.json的配置插件 */
const STATSWriterPlugin = new StatsWriterPlugin({
    filename: "../webpack-stats.json",
    stats: {
        assets: true,
        chunks: true,
        modules: true,
        // Exclude webpack-stats.json asset
        excludeAssets: [/webpack-stats.json/],
        // Exclude custom-module.js module
        excludeModules: [/custom-module.js/]
    }
})
/* css文件重命名 */
const MINICssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
})
const config = {
    entry: {
        index: './src/index.js',
    },
    mode: "production",
    devtool: "inline-source-map",
    output: {
        // Configure entry file names
        filename: '[name].[contenthash].js',
        // Configure chunk file names
        chunkFilename: '[name].[chunkhash].js',
        // Configure asset file names
        assetModuleFilename: '[path][name].[contenthash][ext][query]',
        clean: true,
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    /* 优化 */
    optimization: {
        // splitChunks: {
        //     chunks: "all"
        // },
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: "single"
    },
    plugins: [
        HTMLWebpackPlugin,
        STATSWriterPlugin,
        MINICssExtractPlugin,
        // BUNDLEAnalyzerPlugin,
    ],
    // devServer: {
    //     client: {
    //         progress: true,
    //         logging: "info",
    //     },
    //     /* 是否启动compress压缩 */
    //     compress: true,
    //     /* 是否启动热更新 */
    //     hot: true,
    //     port: 30000,
    //     /* 开启服务是否自打开浏览器页签 */
    //     open: false,
    //     /* 打开http://localhost:30000/my-page */
    //     // open: ['/my-page'],
    // }
}

module.exports = config;