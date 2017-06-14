
// hmr
const webpack = require('webpack');

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: [
    './public/index.js', 
    'webpack-hot-middleware/client'
  ],
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    // Webpack 1.0
    //new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),

    new DashboardPlugin(),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]


}

//compiler.apply(new DashboardPlugin());