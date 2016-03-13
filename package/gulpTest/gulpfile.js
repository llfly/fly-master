/**
 * gulp Test
 * @authors llfly (ll-fly.com)
 * @date    2015-09-24 22:20:50
 * @version $0.0.1$
 */
var gulp = require('gulp');

// [拷贝一个文件]
gulp.task('hello',function(){
	console.log('hello');
});
gulp.task('world',function(){
	console.log('world');
});

//定义一个组合任务
gulp.task('go',['hello','world'],function(){
	console.log('done');
})
//-----------------------------------------------------------------
// [拷贝一级子目录下多个文件] [拷贝目录下所有文件]
gulp.task('copyHtml',function(){
	return gulp.src('./app/index.html')//相对配置文件的路径
	.pipe(gulp.dest('dist'));
})
gulp.task('copyImage',function(){
	// return gulp.src('./app/images/*.png')
	// .pipe(gulp.dest('dist/images'));
	// return gulp.src('./app/images/*.{jpg,png}')// 一个*可以匹配除了路径分隔符外的任意字符，**匹配任意字符（包括路径分隔符/）
	// .pipe(gulp.dest('dist/images'));

	return gulp.src('./app/images/**/*.{jpg,png}')
	.pipe(gulp.dest('dist/images'));
})
//----------------------------------------------------------------
// [拷贝目录下所有文件]
// !表示拒绝匹配，排除文件
gulp.task('copyImageExcept',function(){
	return gulp.src(['./app/**/*.{png,jpg}','!./app/*'])
			.pipe(gulp.dest('dist'));
})
//----------------------------------------------------------------
// [监测]
gulp.task('watch',function(){
	return gulp.watch('./app/index.html',['copyHtml']);
})
//----------------------------------------------------------------
//插件：gulp-less,gulp-scss  require导入
//压缩js:npm install gulp-uglify --save-dev
//
//----------------------------------------------------------------
//实时预览插件：npm install gulp-connect
gulp.task('server',function(){
	connect.server({
		root:'dist',//设置文件根目录
		port:8080,//设置端口
		livereload:true//动态加载，实时刷新

	})
})
//合并 gulp-concat
//压缩 gulp-uglify
//重命名 gulp-rename
//压缩css gulp-minify-css
//压缩图片 gulp-imagemin
//----------------------------------------------------------------
//真实项目
//npm install -g yo
//npm install generator-gulp-webapp -g
//yo gulp-webapp 项目名
//yo gulp-angular
//gulp-babel
//browser-sync
//gulp-notify
//gulp-plumber
//----------------------------------------------------------------

gulp.task('server',['babel'],() =>{
	browserSync.init({
		server:{
			baseDir:'/'
		}
	})
})
//----------------------------------------------------------------
//和webpack混合使用
// var gulp = require('gulp');
// var gutil =require('gulp-util');
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config.js');
// gulp.task('webpack',function(callback){
// 	var myConfig = Object.create(webpackConfig);
// 	webpack(myConfig,function(err,stats){
// 		callback();
// 	});
// })