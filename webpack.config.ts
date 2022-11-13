import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config = function (env: any, argv: any): webpack.Configuration {
    console.log(env, argv, 'webpack-start')
    return {
        name: "SAMUEL-START-WEBPACK-CONFIGURATION",
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-map' : 'eval',
        entry: './foo.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'foo.bundle.js',
        },
        plugins: [],
    };
}

export default config;