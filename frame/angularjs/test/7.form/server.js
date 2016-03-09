var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
app.use(bodyParser.json());
app.post('/check',function(req,res){
	var data = req.body;
	console.log(data);
	res.setHeader('Access-Control-Allow-Origin',"*");
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	if(data.username == 'admain'){
		res.send({unique:false});
	}else{
		res.send({unique:true});
	}
})
app.all('/check',function(req,res){
	res.setHeader('Access-Control-Allow-Origin',"*");
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	res.send();
})
app.listen(8080);
