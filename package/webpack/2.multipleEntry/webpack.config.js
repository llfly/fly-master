var webpack = require('webpack');
module.exports = {
	entry:{
		bundle1:'./entry1.js',
		bundle2:'./entry2.js'
	},
	output:{
		path:__dirname,
		filename:'[name].js'
	},
	module:{
		loaders:[
		{
			test:/\.css$/,
			loader:"style.css"
		},
		{
			test: /\.(png|jpg)$/,
 			loader: 'url?limit = 4000'
		}
		]
	},
	plugins: [
		new webpack.BannerPlugin('//hello,world'),
		new webpack.optimize.CommonsChunkPlugin('common.js')
	]
}