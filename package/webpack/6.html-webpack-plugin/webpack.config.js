var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
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
          loader: ExtractTextPlugin.extract('style-loader',"css-loader")
        },
        {
          test:/\.less/,
          loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
        },
        {
          test:/\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test:/\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'common.js'),
      new ExtractTextPlugin('bundle.css'),
      new HtmlWebpackPlugin({
        title: 'll-react',
        template: './app/index.html'
      })
    ],
    devtool: 'cheap-module-source-map'//在浏览器中直接调试源码，控制台sources下
};