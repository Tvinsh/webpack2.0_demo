
// tree shaking -> 按需加载

const webpack = require("webpack");
const path = require('path'); 

module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                babelrc: false,
                presets: [["es2015", { "modules": false}]]
            }
        }]
    }
}