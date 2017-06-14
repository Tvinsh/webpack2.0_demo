const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  // Notice!
  // lazy must be `false` to make `webpack-hot-middleware` work
  lazy: false,

  // watch options (only lazy: false)
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },

  publicPath: webpackConfig.output.publicPath

}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}));

app.use(express.static('./public'));

app.listen(3000, function() {
  console.log('Listening on 3000');
});