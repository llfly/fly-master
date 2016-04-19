var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

/* GET home page. */
router.get('/',  jwt({secret:'haha'}), function(req, res, next) {
	console.log(1);
	console.log(req.user);
	if(!req.user.admin) return res.sendStatus(401);
	res.sendStatus(200);
});

module.exports = router;
