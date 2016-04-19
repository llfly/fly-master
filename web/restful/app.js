var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var oauthserver = require('oauth2-server');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.oauth = oauthserver({
  model:{},//Object
  grants:['password'],//array,需要支持的类型，目前支持password和refresh_token
  debug:true//function|boolean
  //accessTokenLifetime访问令牌生命周期，默认3600
  //refreshTokenLifetime更新令牌生命周期，默认1209600
  //authCodeLifetime授权码生命周期，默认30s
  //clientIdRegex
});

app.all('/oauth/token',app.oauth.grant());

app.get('/',app.oauth.authorise(),function(req,res){
  res.send('secret area');
});

app.get('/hello',function(){
  //var urlObj = url.parse(req.url,true);
  //req.host
  //req.path  urlObj.pathname
  //req.query urlObj.query
})


app.get('/user/:id/:age',function(req,res){
  console.log(req.params.id);
  console.log(req.parmas.age);
  console.log(req.host);
})

//REST
//resources representational state transfer (资源表现层状态转化)
//资源:网络上的一个实体，每一个资源对应一个特定的URI
//表现层：资源呈现出来的形式叫做表现层，json,html,txt
//状态转化：http协议里面，四个表现操作方式的动词对应四种基本操作
//某些动词是http动词表示不了，就应该把动作作为一种资源


//restful API设计
//使用http协议
//url只有名词
//http动词
// get 从服务器获取资源(一项或多项)
// post 在服务器新建一个资源
// put 在服务器更新资源（客户端提供改变后的完整资源）
// patch 在服务器更新资源（客户端提供改变的属性）
// delect 从服务器删除资源
// 查询字符中指定过滤条件
// 当前页
// 每页数量
// 过滤关键字
// 排序字段

//app.use(app.oauth.errorHandler());



//app.listen(3001);
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;
