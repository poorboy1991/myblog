const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const WebpackBaseConf = {
    entry: [
        'babel-polyfill',
        resolve('../app/app.js')
    ],
    output: {
        path: resolve('../dist'),
        filename: '[name].[hash:4].js',
        chunkFilename: 'chunks/[name].[hash:4].js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@app': resolve('../app'),
            '@actions': resolve('../app/redux/actions'),
            '@reducers': resolve('../app/redux/reducers'),
            '@configs': resolve('../app/configs'),
            '@middleware': resolve('../app/middleware'),
            '@pages': resolve('../app/pages'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolve('../app'),
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[hash:4].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            title: 'kai的博客',
            filename: 'index.html',
            template: resolve('../app/index.html'),
            inject: 'body'
        })
    ]

}

module.exports = WebpackBaseConf