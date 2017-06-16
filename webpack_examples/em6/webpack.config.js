
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
  module: {
      rules: [{
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      }]
  },
  plugins: [

    // new webpack.optimize.OccurrenceOrderPlugin(),

    new DashboardPlugin(),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]


}
