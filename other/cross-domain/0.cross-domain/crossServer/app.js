var express = require('express');

var app = express();


app.get('/',function(req,res){
  res.send('你会被浏览器拦截的');
})

app.listen(3000);
