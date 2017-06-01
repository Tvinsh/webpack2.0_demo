const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  // entry: {
  //   bpp: "./bpp.js",
  //   cpp: "./cpp.js",
  //   dpp: "./dpp.js"
  // },
  entry: {
    app: ['./bpp.js','./cpp.js','./dpp.js']
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
};