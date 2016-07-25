module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
    //css-loader去读取css文件，通过style-loader将css插入dom中，不同的loader之间通过!连接
      { test: /\.css$/, loader: 'style-loader!css-loader' },//从右向左，先调用css-loader进行处理，再调用style-loader
    ]
  }
};
