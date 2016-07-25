
生成多页面

应用不可能都是SPA，不可能只生成一个html文件，如果想生成多个html页面这么玩？其实也是很简单的: 现在的需求是这样的，有两个页面，一个叫index.html 它需要引用vendors.js和app.js这两个文件，还有一个mobile.html页面他要引用vendors.js和mobile.js这两个文件。

首先新建一个叫mobile.js的入口文件，比app.js更简单一些

import './main.scss';
import $ from 'jquery';
import 'imports?jQuery=jquery!./plugin.js';

$(document).ready(function() {
  let app  = document.createElement('div');
  app.innerHTML = '<h1>Hello World</h1>';
  document.body.appendChild(app);
  $('h1').greenify();
});
在config里面配置

  entry: {
    //三个入口文件，app, mobile和 vendors
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    vendors: ['jquery', 'moment']
  },
  output: {
    path: BUILD_PATH,
    //注意 我们修改了bundle.js 用一个数组[name]来代替，他会根据entry的入口文件名称生成多个js文件，这里就是(app.js,mobile.js和vendors.js)
    filename: '[name].js'
  },
原来我们是没有模版文件的，原来利用的HtmlWebpackPlugin的默认模版。谁想到这伟大的插件还可以自定义模版。 所以新建一个专门放模版的文件夹templates,在里面加两个模版文件index.html 和 mobile.html

index.html

<!DOCTYPE html>
<html>
  <head>
    <title>{%= o.htmlWebpackPlugin.options.title %}</title>
  </head>
  <body>
    <h3>Welcome to webpack</h3>
  </body>
</html>
mobile.html

<!DOCTYPE html>
<html>
  <head>
    <title>{%= o.htmlWebpackPlugin.options.title %}</title>
  </head>
  <body>
    <h3>Welcome to mobile page</h3>
  </body>
</html>
继续配置config.js,现在让HtmlwebpackPlugin可以生成多个文件

...
//Template的文件夹路径
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');
...
plugins: [
  ...
  //创建了两个HtmlWebpackPlugin的实例，生成两个页面
  new HtmlwebpackPlugin({
    title: 'Hello World app',
    template: path.resolve(TEM_PATH, 'index.html'),
    filename: 'index.html',
    //chunks这个参数告诉插件要引用entry里面的哪几个入口
    chunks: ['app', 'vendors'],
    //要把script插入到标签里
    inject: 'body'
  }),
  new HtmlwebpackPlugin({
    title: 'Hello Mobile app',
    template: path.resolve(TEM_PATH, 'mobile.html'),
    filename: 'mobile.html',
    chunks: ['mobile', 'vendors'],
    inject: 'body'
  })
  ...
]
然后运行

npm run build
看看生成好的伟大的文件，没问题！

app.js
mobile.js
vendors.js
index.html
mobile.html
看看引用的对应关系，完美！！

index.html

<body>
  <h3>Welcome to webpack</h3>
  <script src="vendors.js"></script><script src="app.js"></script>
</body>
mobile.html

<body>
  <h3>Welcome to mobile page</h3>
  <script src="vendors.js"></script><script src="mobile.js"></script>
</body>



生成Hash名称的script来防止缓存

经典问题,代码更新了，但是浏览器有缓存，到时候就傻了。 怎么解决，换名字呗。可以直接在后面加参数,也可以直接换掉文件名字。 webpack提供给了我们非常简单的方法，基于文件的md5，只要把

output: {
  path: BUILD_PATH,
  //只要再加上hash这个参数就可以了
  filename: '[name].[hash].js'
},
运行完build以后，看看生成的文件，很完美～

index.html

<body>
  <h3>Welcome to webpack</h3>
  <script src="vendors.js"></script><script src="app.b6641abee64c999d95c1.js"></script>
</body>

