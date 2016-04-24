var express = require('express');

var app = express();


app.get('/img/st.gif',function(req,res){
	console.log('get data');
	res.send({
		state:true
	});
});


app.listen(3000);