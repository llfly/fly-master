var mongoose = require('mongoose');
	Schema = mongoose.Schema;
	models = require('./models');
var settings = require('../settings');
mongoose.connect(settings.url);
mongoose.model('User',new Schema(models.User));
global.Model = function(type){
	return mongoose.model(type);
}