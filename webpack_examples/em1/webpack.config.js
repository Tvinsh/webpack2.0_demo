
/*
    webpack 入口文件，可以是 字符串 数组 对象
*/

const webpack = require("webpack");

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  context: __dirname + "/src",   // 指定从src目录开始查找文件
  entry: {
    bpp: "./bpp.js",
    cpp: "./cpp.js",
    dpp: "./dpp.js"               // webpack 会搜索入口的依赖，以及那些依赖的依赖
  },
  // entry: {
  //   app: ['./bpp.js','./cpp.js','./dpp.js']
  // },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new DashboardPlugin()
  ]
};