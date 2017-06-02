const webpack = require("webpack");
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false',
        './client/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
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
    plugins: [
        // 生成html且引入bundle
        new HtmlWebpackPlugin({
            filename: './index.html'
        }),
        // 生成额外的style.css文件
        new ExtractTextPlugin('styles.css'),

        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

    ]
}