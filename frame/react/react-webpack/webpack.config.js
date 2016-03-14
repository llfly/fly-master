var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  //entry: path.resolve(__dirname, 'app/index.js'),
  entry: [
    'webpack/hot/dev-server', //代码热编译
    'webpack-dev-server/client?http://localhost:8080', //编辑器中保存代码就可在浏览器中实现刷新
    path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: path.resolve(__dirname, '/node_modules/')
        //include: path.join(__dirname, 'app')
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热替换的插件 和--hot命令一样
    new webpack.NoErrorsPlugin(), //防止报错插件
    new ExtractTextPlugin("bundle.css")
  ]
};