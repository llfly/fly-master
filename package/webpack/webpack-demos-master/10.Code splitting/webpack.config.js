module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
//把文件分割成几个，按需加载
//首先 使用require.ensure定义分隔点
//require.ensure告诉webpack ./a.js应该从bundle.js文件中分离出来，并且创建成一个单个文件


//在表面上，不会感觉到任何不同
//Webpack 把 main.js 和 a.js 创建成两个不同的模块 bundle.js 和 1.bundle.js
// 当被需要时从bundle.js中加载1.bundle.js

