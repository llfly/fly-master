var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/',function(req,res){
  res.send('你会被浏览器拦截的');
})

app.listen(3001);
