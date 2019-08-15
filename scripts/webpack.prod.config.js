const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WebpackBaseConf = require('./webpack.base.config')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}


const WebpackProdConf = {

    output: {
        path: resolve('../dist'),
        filename: '[name].[hash:4].bundle.js'
    },

    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false,
        }),
        new HtmlWebpackPlugin({
            title: 'new title~~~~~',
            filename: 'index.html',
            template: resolve('../app/index.html'),
            inject: 'body'
        }),
        new UglifyJsPlugin({
            // include: /app/i,
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
                ecma: 6,
                managle: true,
                compress: true,
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/vendor-manifest.json')
        })
    ]
}

module.exports = merge(WebpackBaseConf, WebpackProdConf)
