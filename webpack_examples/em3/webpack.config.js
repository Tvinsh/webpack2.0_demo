const webpack = require("webpack");
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
            }),
            include: [
              path.resolve(__dirname, "src")
            ],
            exclude: [
              path.resolve(__dirname, "src/demo")
            ]
        }]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],

        extensions: [".js", ".json", ".jsx", ".css"],

        alias: {
            "module": path.resolve(__dirname, "app/third/module.js")
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        inline:true
    },

    watch: true,
    watchOptions: {
      aggregateTimeout: 300, // 延时300毫秒再编译
      poll: 1000 // 每1秒进行一次轮询
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
        })
    ]
}