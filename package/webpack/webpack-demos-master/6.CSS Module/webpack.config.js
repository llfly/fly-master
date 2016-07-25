module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      //在CSS Modules中，选择器是局部有效的，通过modules参数来指定全局的css样式
      //https://css-modules.github.io/webpack-demo/
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  }
};
