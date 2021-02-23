const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './main.ts',
    mode: 'production',
    output: {
        publicPath: '',
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
};