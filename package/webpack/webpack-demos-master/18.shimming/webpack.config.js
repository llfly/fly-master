//在 AMD/CMD 中，需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行 shim 处理
//这时候需要使用 exports-loader
{ test: require.resolve("./src/js/tool/swipe.js"),  loader: "exports?swipe"}
//之后在脚本中需要引用该模块的时候，这么简单地来使用就可以了：
require('./tool/swipe.js');
swipe();


//独立打包样式文件
//有时候可能希望项目的样式能不要被打包到脚本中，而是独立出来作为.css，然后在页面中以<link>标签引入。
//这时候我们需要 extract-text-webpack-plugin 来帮忙：
   var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    var ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
        plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
        entry: {
        //...省略其它配置
//ExtractTextPlugin.extract('style-loader', 'css!less')




//双服务器模式

//项目开发中，仅有一台静态服务器是不能满足需求的，我们需要另启一台web服务器，且将静态服务器集成到web服务器中，就可以使用webpack的打包和加载功能。我们只需要修改一下配置文件就可以实现服务器的集成。

 entry: [
    './src/page/main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://127.0.0.1:8080'
  ]
  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: "http://127.0.0.1:8080/assets/"
  }
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
//如果在开发中启动两个服务器并不是一个很好地选择，webpack提供了一个中间件webpack-dev-middleware，但其只能在生产环境中使用，可以实现在内存中实时打包生成虚拟文件，供浏览器访问以及调试。使用方式如下：

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

var compiler = webpack({
    // configuration
    output: { path: '/' }
});

app.use(webpackDevMiddleware(compiler, {
    // options
}));


//启用source-map

//现在的代码是合并以后的代码，不利于排错和定位，只需要在config中添加

  ...
  devtool: 'eval-source-map',
  ...
//这样出错以后就会采用source-map的形式直接显示你出错代码的位置。



//使用preLoaders和postLoaders

//也许你想在写代码的时候检查自己的js是否符合jshint的规范，那么隆重推荐preLoaders和postLoaders，上一节我们已经非常了解loaders了，用它来处理各种类型的文件。perLoaders顾名思义就是在loaders执行之前处理的，webpack的处理顺序是perLoaders - loaders - postLoaders。

//安装jshint

//npm install jshint-loader --save-dev
//在config文件中配置

module: {
...
    //和loaders一样的语法，很简单
    perLoaders: [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }
    ]
}

...
//配置jshint的选项，支持es6的校验
jshint: {
  "esnext": true
},

