var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test:/\.css/,
          loader: 'style!css'
        },
        {
          test:/\.less/,
          loader:'style!css!less'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};