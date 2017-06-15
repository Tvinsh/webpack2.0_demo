const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 引入自定义的plugin
const HelloWebpackPlugin = require('./selfplugins/hello-webpack-plugin.js');

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
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

        new DashboardPlugin(),
        
        // 生成html且引入bundle
        new HtmlWebpackPlugin({
            filename: './index.html'
        }),
        // 生成额外的style.css文件
        new ExtractTextPlugin('styles.css'),

        new HelloWebpackPlugin({options: true})

    ]
}