var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
// npm install -g yo
// npm install generator-gulp-webapp -g
// yo gulp-webapp gulptest

//合并文件
var concat = require('gulp-concat');
//压缩文件
var uglify = require('gulp-uglify');
//重命名文件
var rename = require('gulp-rename');
//压缩css
var minifycss = require('gulp-minifycss');
//压缩图片
var imagemin = require('gulp-imagemin');
/**
 * [实时预览]
 */
gulp.task('server',function(){
	connect.server({
		root:'dist',//设置文件根目录
		port:8080,//设置端口
		livereload:true//动态加载，实时刷新
	})
})

gulp.task('default',['server','watch'],function(){

});

/**
 * [合并，压缩，重命名文件]
 */
gulp.task('concatScript',function(){
	gulp.src(['']).pipe(concat('main.js')).pipe(uglify()).pipe(rename('main.min.js'))
	.pipe(gulp.dest('./dist/js'));
})


gulp.task('watch',function(){
	gulp.watch('./app/*.html',['htmlDeal']);
	gulp.watch('./app/sass/*.sass',['sassDeal']);
	gulp.watch('./app/i/**/*',['imgDeal']);
	gulp.watch('./app/js/*.js',['jsDeal']);
});

/**
 * [拷贝js]
 */
gulp.task('jsDeal',function(){
	return gulp.src('./app/js/*.js')
			.pipe(gulp.dest('./dist/js'));
});

/**
 * [编译sass，拷贝]
 */
gulp.task('sassDeal',function(){
	return gulp.src('./app/sass/*.sass')
			.pipe(sass())
			.pipe(minifycss())
			.pipe(rename('main.min.css'))
			.pipe(gulp.dest('./dist/css'));
});

/**
 * [拷贝图片]
 */
gulp.task('imgDeal',function(){
	return gulp.src('./app/i/**')
			.pipe(imagemin())
			.pipe(gulp.dest('./dist/i'));
});

/**
 * [拷贝html]
 */
gulp.task('htmlDeal',function(){
	return gulp.src('./app/*.html')
			.pipe(gulp.dest('./dist'))
			.pipe(connect.reload());
});