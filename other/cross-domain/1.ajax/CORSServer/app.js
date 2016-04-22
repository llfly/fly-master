var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:true}));

// app.all('/',function(req,res,next){
// 	console.log(req.method);
// 	res.setHeader('Access-Control-Expose-Headers','')
// })

// app.all('/',function(req,res,next){
// });

app.get('/', function(req, res) {
	//res.setHeader('Access-Control-Allow-Origin','*');
	console.log('get info');
	res.send({
		state: true
	})
});


app.options('/',function(req,res){
	res.setHeader('Access-Control-Allow-Headers','hahha');
	//res.setHeader('Access-Control-Allow-Methods','post,delete');
	res.setHeader('Access-Control-Allow-Origin','*');
	console.log(req.method);
	res.send({
		state:'options'
	});
});


app.post('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	//console.log(res);
	console.log('get post');
	res.send({
		state:'post'
	});
});

app.listen(3000)