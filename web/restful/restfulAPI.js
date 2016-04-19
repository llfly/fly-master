var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

app.set('view engine','jade');
app.set('views',path.join(path.resolve(),'/views'));
app.use(bodyParser.urlencoded({extended:true}));

//存放所有的用户
var users = [
{
	name:'fy',
	age:18
},
{
	name:'ll',
	age:23
}
];



//1.获取所有用户


app.get('/users',function(req,res){
	//q代表权重
	//Accept:text/html,application/xml;q=0.9,image/webp,*/*;q=0.8
	var accept = req.headers['accept'];
	var acceptType = accept.split(',').map(function (item) {
        var values = item.split(';');
        return {
            type: values[0],//需要的文件类型
            q: values[1] ? values[1].split('=')[1] : 1 //权重 默认是1
        }
        //用优先级进行排序，取排名最高那个
    }).sort(function (a, b) {
        return b.q - a.q;
    })[0].type;

	if(acceptType == 'text/plain'){
        res.setHeader('Content-Type',acceptType);
        res.send(users);
    }else if(acceptType == 'text/html'){
        //设置响应类型
      res.setHeader('Content-Type',acceptType);
        //渲染模板
       res.render('users.jade',{
           users:users
       });
    }else{
        res.send(users);
    }
});



app.listen(8080);

// var path = require('path');
// var bodyParser = require('body-parser');
// app.set('view engine','jade');



