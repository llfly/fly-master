# 1.webpack
## 1.1 webpack命令
创建index.html(index里引入bundle),entry.js,bundle.js(执行下面命令会自动创建)
entry.js为入口文件，bundle.js为目标文件
`webpack ./entry.js bundle.js`
模块依赖
webpack 会分析入口文件，解析包含依赖关系的各个文件
这些文件（模块）都打包到bundle.js文件中
webpack会给每个模块分配一个唯一的id并通过这个id索引和访问模块
页面启动时先执行entry.js代码，其他的模块会在require时懒加载

## 1.2 loader加载器
webpack本身只能处理javascript模块，如果要处理其他类型的文件，需要使用loader进行转换
loader可以理解为是模块和资源的转化器，可以转换任何类型的模块
loader可以通过管道方式链式调用，每个loader可以把资源转化成任意格式并传递给下一个loader，但是最后一个loader必须返回一个js
loader可以接受参数，以此来传递配置项给loader
loader可以通过npm安装
loader可以通过文件扩展名（或正则表达式）绑定不同的加载器

加载css文件
`npm install css-loader style-loader`
首页将style.css也看成是一个模块
css-loader来读取它
style-loader把它插入到页面中

## 1.3 webpack.config.js配置文件
执行 webpack 即可
配置文件
webpack在执行的时候可以通过指定的配置文件
默认情况下会执行当前目录中的webpack.config.js
配置文件是一个node.js模块，返回一个json格式的配置信息对象
添加配置文件，然后只要执行webpack --progress --colors即可

webpack.config.js文件配置

```
module.exports = {
    entry: './entry.js', //指定打包的入口文件，每有一个键值对，就是一个入口文件
    output: { //配置打包结果
        path: __dirname, //定义了输出的文件夹
        filename: "bundle.js" //定义了打包结果文件的名称
    },
    module: { //定义模块的加载逻辑
        loaders: [ //定义了一系列的加载器
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/', //设置忽略
                query: {//传递参数，也可以通过?拼接
                    compact: false,
                    presets: ['es2015']
                }
            }//当需要加载的文件匹配`test`的正则时，就会调用后面的`loader`对文件进行处理
        ]
    },
    plugins: [//引用插件
        new webpack.BannerPlugin('//hello,world'),//头部插入信息插件
    ],
    resolve: {
        alias: {
            jQuery: '../../lib/jQuery/jquery-2.0.3.js'
        }//对jQuery设置别名
    }
}
```


插件
插件的使用一般是在webpack的配置信息plugins选项中指定 可以向生成的打包文件头部插入一些信息
放到plugins数组内部，引用webpack模块

加载图片
url-loader会将样式中引用到的图片转为模块来处理
`npm install url-loader --save-dev`
limit的参数是图片大小小雨这个限制的时候，会自动启动base64编码图片

别名
别名的作用是把用户的一个请求重定向到另一个路径
resolve:{alias}

expose
如果想在前台使用打包的jquery需要把jquery暴露出来
`npm install expose-loader --save-dev`
把$作为别名为jquery的变量暴露到全局上下文中
require('expose?$!jquery');

使用es6
`npm install babel-core --save-dev`
`npm install babel-loader --save-dev`
`npm install babel-preset-es2015`
`{loader:'babel-loader',exclude:/node_modules/}`
# 2.multipleEntry
/打包成多个资源文件
entry属性可以是一个对象，而对象名也就是key会作为下面output的filename属性的[name]

```
 entry:{
  bundle1:'./entry1.js',
  bundle2:'./entry2.js'
 }
output:{
 path:__dirname,
 filename:"[name].js"
}
```

问题：相同模块会同时存在于bundle1,bundle2，这个时候需要公共模块

利用插件可以智能提取公共部分，以提供浏览器缓存复用
plugins:[new webpack.optimize.CommonsChunkPlugin('common.js')]
需要手动在html上去加载common.js，并且是必须要最先加载

# 3.webpack-dev-server
`npm install webpack-dev-server -g`
会把当前目录作为根目录启动一个express服务，会自动打包实时刷新
将命令配置到package.json的dev参数中
在webpack.config.js更新一下入口文件配置即可实现编辑器中保存代码就可在浏览器中实现刷新的效果。

```
entry: [
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/index.js')
]
```

gulp可以结合browser-sync的reload接口和watch功能结合，也可以实现。

# 4.react-hot-loader

# 5.extract-text-webpack-plugin
css文件和js平行加载
# 6.html-webpack-plugin
将html也进行统一产出
调试工具devtool:'cheap-module-source-map'
第三方资源 new webpack.optimize.CommonsChunkPlugin('vendor','common.js')
?[hash]
webpack.DefinePlugin()区分开发环境