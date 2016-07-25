module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {//定义模块的加载逻辑
    loaders:[//定义了一系列的加载器
      {//当需要加载的文件匹配`test`的正则时，就会调用后面的`loader`对文件进行处理
        test: /\.js[x]?$/,//正则匹配js[x]结尾文件
        exclude: /node_modules/,//忽略
        //loader: 'babel-loader?presets[]=es2015&presets[]=react',
        //两种参数方式
        loader: 'babel-loader',
        query: {
          compact: false,//不压缩代码，一般用在测试与生产环境
          presets: ['es2015','react']
        }
      },
    ]
  }
};
