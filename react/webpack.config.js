const path = require("path")
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    entry: "./react/src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist") ,
        clean: true
    },
    devtool: "source-map",
    mode: "development",
    plugins:[
        new HtmlWebpackPlugin({
            title: "keyboard",
            template: "./index.html",
            inject: "body",
            favicon: "./favicon.ico"
        }),
        new MiniCssExtractPlugin({filename: "style.css"})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8000,
        open : true,
        watchFiles: ' index.html'
    }
}