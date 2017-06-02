

//这个中间件会导致 webpack 在内存中编译文件。当一个编译正在执行的时候，它会将对于文件的请求延迟，直到编译完成。



const express = require('express');

const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');


const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {

  noInfo: false,

  // display nothing to the console
  quiet: false,

  // switch into lazy mode
  // that means no watching, but recompilation on every request
  lazy: true,

  // watch options (only lazy: false)
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },

  // 大部分情况下和 `output.publicPath`相同
  publicPath: "/",   

  // options for formating the statistics
  stats: {
    colors: true
  }
  
}));

app.use(express.static('./client'));

// app.use(WebpackHotMiddleware(compiler, {
//     log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
// }));



app.listen(3000, function() {
  console.log('Listening on 3000');
});