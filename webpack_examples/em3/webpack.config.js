
// 拆分css

const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd"    //  定义导出库的类型  项目代码一般不用写
    },
    module: {
        rules: [{
            test: /\.css$/,
            //use: [ 'style-loader', 'css-loader' ],
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

        // 定义用于查找模块的目录
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")    
        ],          

        // 使用的扩展名
        extensions: [".js", ".json", ".jsx", ".css"],

        //  使用别名
        alias: {
            "$": "JQuery"  
        }
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        inline:true
    },

    // 启用观察
    watch: true,

    watchOptions: {
      aggregateTimeout: 300, // 延时300毫秒再编译
      poll: 1000 // 每1秒进行一次轮询
    },

    plugins: [

        new DashboardPlugin(),

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