// =======================
// get the packages we need
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our mongose config
var User   = require('./models/user'); // get our mongoose model


// =======================
// configuration
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));




// =======================
// routes
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.get('/setup',function(req,res){
	var nick = new User({
		name:'Nick',
		password:'password',
		admin:true
	});

	nick.save(function(err){
		if(err) throw err;

		console.log('User saved success');
		res.json({success:true});
	})
})
// api routes

var apiRoutes = express.Router();

// route middleware to verify a token
var tokenMiddleware = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({
        success: false,
        message: 'No token provided.'
    });

  }
};
// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// route to authenticate a user(POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate',function(req,res){
	User.findOne({
		name:req.body.name
	},function(err,user){
		if(err) throw err;

		if(!user){
			res.json({success:false,message:'Authentication failed. User not found.'})
		}else if(user){
			//check if password maches
			if(user.password != req.body.password){
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			}else{

				//if user is found and password is right
				//create a token
				var token = jwt.sign(user,app.get('superSecret'),{
					expiresInMinutes: 1440 // expires in 24 hours
				});

				//retrun the information including token as Json
				res.json({
					success:true,
					message: 'Enjoy your token!',
          			token: token
				})
			}
		}
	})
})


apiRoutes.all('/info',tokenMiddleware,function(req,res){
	res.send('token success');
})



// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// =======================
// start the server
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);