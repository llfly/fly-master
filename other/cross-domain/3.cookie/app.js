var express = require('express');
var cookieParser = require('cookie-parser');
var path =require('path');
var app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname,'./')));

app.post('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin',"*");
	console.log("Cookies: ", req.cookies);
	// res.writeHead(200,{
	// 	"Set-Cookie":"name=llfly;domain=www.a.com;expires=Sun, 08-Nov-2016 15:43:30 GMT"
	// });
	// 两个服务如果只是子域不同，可以设置domain到顶级域，但不能跨域设置
	res.setHeader("Set-Cookie","name=llfly;domain=www.a.comr;expires=Sun, 08-Nov-2016 15:43:30 GMT");
	res.send('test');
});

// app.get('/cookie',function(req,res){
// 	console.log(req.url);
// 	// res.setHeader("Set-Cookie","name=llfly;domain=www.a.com;expires=Sun, 08-Nov-2016 15:43:30 GMT");
// 	// res.redirect('http://www.b.com:3000/test.html');
// })


app.listen(3000);