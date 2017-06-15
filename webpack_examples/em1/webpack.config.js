
/*
    webpack 入口文件，可以是 字符串 数组 对象
*/

const webpack = require("webpack");

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  context: __dirname + "/src",
  entry: {
    bpp: "./bpp.js",
    cpp: "./cpp.js",
    dpp: "./dpp.js"
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