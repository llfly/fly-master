var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.export = {
	User:{
		username:{type:String,required:true},
		password:{type:String,required:true},
		email:{type:String,required:true}
	}
}