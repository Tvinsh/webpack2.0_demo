const webpack = require("webpack");
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


var HelloPlugin = require('./selfplugins/HelloPlugin.js');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
           // use: [ 'style-loader', 'css-loader' ]
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        inline:true
    },
    plugins: [
        // 生成html且引入bundle
        new HtmlWebpackPlugin({
            filename: './index.html'
        }),
        // 生成额外的style.css文件
        new ExtractTextPlugin('styles.css'),
        // js 代码丑化
        new UglifyJSPlugin({
            beautify: false,
        }),

        new HelloPlugin({options: true})

    ]
}