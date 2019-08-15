const path = require('path')
const webpack = require('webpack')

function resolve(...relatedPath) {
    return path.join(__dirname, ...relatedPath)
}

module.exports = {
    entry: {
        vendor: ['babel-polyfill']
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: resolve('../dist', '[name]-manifest.json'),
            path: path.join(__dirname, '../dist', '[name]-manifest.json'),
            name: '[name]_library' // 需要与output name相同
        })
    ]
}