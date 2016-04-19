var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
	res.render('users/reg');
});


router.post('/reg',function(req,res){
	console.log(req.session);
});

//登陆访问页
router.get('/login',function(req,res){
  res.render('users/login');
});


//登陆处理页
router.post('/login',function(req,res){

});

router.get('/logout', function (req, res) {

});

module.exports = router;
