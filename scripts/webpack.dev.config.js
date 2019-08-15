const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const WebpackBaseConf = require('./webpack.base.config')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const PORT = 9999

const WebpackDevConf = {
    devServer: {
        contentBase: resolve('../app'),
        historyApiFallback: false,
        hot: false,
        host: '0.0.0.0',
        port: PORT,
    },
    devtool: 'source-map',
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            IS_DEVELOPMETN: true,
        }),
    ],
}

module.exports = merge(WebpackBaseConf, WebpackDevConf)
