const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        // 加了这个之后，每次编译时不会再重新生成vender的hash
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' 
        }),

    ]
}