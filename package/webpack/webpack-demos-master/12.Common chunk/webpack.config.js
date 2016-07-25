var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//当多个script有共同模块时，可以通过CommonsChunkPlugin来取出共同模块打包成单个文件
module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js')
  ]
}
