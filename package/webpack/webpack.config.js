var webpack = require('webpack');
module.exports = {
	entry: './entry.js', //指定打包的入口文件，每有一个键值对，就是一个入口文件
	output: { //配置打包结果
		path: __dirname, //定义了输出的文件夹
		filename: "bundle.js" //定义了打包结果文件的名称
	},
	module: { //定义模块的加载逻辑
		loaders: [ //定义了一系列的加载器
			{
				test: /\.css$/,
				loader: "style!css"
			}, //当需要加载的文件匹配`test`的正则时，就会调用后面的`loader`对文件进行处理
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit = 4000'
			 },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/', //忽略
				query: {
					compact: false,
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('//hello,world'),
	],
	resolve: {
		alias: {
			jQuery: '../../lib/jQuery/jquery-2.0.3.js'
		}
	}
}


//多入口，抽取common
// module.exports = {
// 	entry:{
// 		bundle1:'./entry.js',
// 		bundle2:'./entry.js'
// 	},
// 	output:{
// 		path:__dirname,
// 		filename:'[name].js'
// 	},
// 	module:{
// 		loaders:[
// 		{
// 			test:/\.css$/,
// 			loader:"style.css"
// 		},
// 		{
// 			test: /\.(png|jpg)$/,
//  			loader: 'url?limit = 4000'
// 		}
// 		]
// 	},
// 	plugins: [
// 		new webpack.BannerPlugin('//hello,world'),
// 		new webpack.optimize.CommonsChunkPlugin('common.js')
// 	],
// 	resolve: {
// 		alias: {
// 			jQuery: '../../lib/jQuery/jquery-2.0.3.js'
// 		}
// 	}
// }

