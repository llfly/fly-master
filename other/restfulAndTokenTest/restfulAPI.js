// =======================
// get the packages we need
// =======================
var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');


// =======================
// set template type
// =======================
app.set('view engine','jade');
app.set('views',path.join(path.resolve(),'/views'));



// =======================
// use bodyParser
// =======================
app.use(bodyParser.urlencoded({extended:true}));

/*
app.use(bodyParser.json({
}))
//application/octet-stream
app.use(bodyParser.raw({
    type:'application/!*'
}));
app.use(bodyParser.text({
    type:'text/!*'
}));*/


//POST submit
//application/x-www-form-urlencoded
//multipart/form-data
//application/json
//text/xml


//test data
var users = [
{
    id:0,
	name:'fy',
	age:18
},
{
    id:1,
	name:'ll',
	age:23
}
];
//REST
//resources representational state transfer (资源表现层状态转化)
//url表示资源
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

//结果
//GET/collection:返回资源对象的列表（数组）
//GET/collection/id:返回单个资源对象
//POST/collection:返回新生成的资源对象
//PATCH/collection/id:返回完整的资源对象
//DELETE/collection/id:返回一个空资源


//获取所有的用户 curl -v -H 'accept:text/html'  http://localhost:8080/users
//Accept:text/html,application/xml;q=0.9,image/webp,*/*;q=0.8
//q代表权重
app.get('/users',function(req,res){
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
        //set response type
      res.setHeader('Content-Type',acceptType);
        //render template
       res.render('users.jade',{
           users:users
       });
    }else{
        res.send(users);
    }
});

//返回某个用户信息
//curl  http://localhost:8080/users/1
app.get('/users/:id',function(req,res){
    var id = req.params.id;
    var filteredUsers = users.filter(function(user){
        return user.id == id;
    });
    res.send(filteredUsers.length>0?filteredUsers[0]:'user is not found');
})


//新增加用户
// -X 指定请求方法 --data 指定请求体的数据
//curl -X POST -d "name=zhangsan&age=1"  http://localhost:8080/users
app.post('/users',function(req,res){
    var addedUser = req.body;
    if(addedUser){
        addedUser.id = users[users.length-1].id+1;
        users.push(addedUser);
        //当新增一个资源的时候要返回新生成的资源完整对象
        res.send(addedUser);
    }else{
        res.send({msg:'增加资源失败'});
    }
})

//整体更新全部属性
// curl -X PUT --data "id=2&name=lisi&age=4"  http://localhost:8080/users/2
app.put('/users/:id',function(req,res){
    var putUser = req.body;
    if(putUser){
        for(var i=0;i<users.length;i++){
            //判断当前用户和用户传进来要更新的用户ID是否一致
            if(users[i].id == req.params.id){
                users[i] = putUser;//把老的对象整体替换成新的对象
               break;
            }
        }
        res.send(putUser);
    }else{
        res.send({msg:'更新资源失败'});
    }
});

//局部更新 请求体里只传要更新的字段
//curl -X PATCH --data "name=wangwu"  http://localhost:8080/users/2
app.patch('/users/:id',function(req,res){
    var updatedFields = req.body;
    if(updatedFields){
        for(var i=0;i<users.length;i++){
            //判断当前用户和用户传进来要更新的用户ID是否一致
            if(users[i].id == req.params.id){
              for(var attr in updatedFields){
                  //用新的值替换旧的值
                  if(updatedFields.hasOwnProperty(attr))
                    users[i][attr] = updatedFields[attr];
              }
                res.send(users[i]);
                break;
            }
        }

    }else{
        res.send({msg:'更新资源失败'});
    }
});

//删除
//curl -X DELETE   http://localhost:8080/users/2
app.delete('/users/:id',function(req,res){
    for(var i=0;i<users.length;i++){
        if(users[i].id == req.params.id){
            users.splice(i,1);
            res.send({});
            return;
        }
    }
    // users  = users.filter(function(user){
    //        return user.id != req.params.id;
    // });
    res.send({msg:'删除失败'});
});




//以资源为中间 URL里不要包含动词
app.post('/transaction/:fromId/:toId',function(){
  var age = req.body.age;

});

app.listen(8081);
