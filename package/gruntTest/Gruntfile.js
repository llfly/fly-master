//创建一个grunt插件

// module.exports = function(grunt){
// 	grunt.registerTask('default',function(){
// 		grunt.log.writeln('hello everyone');
// 	});
// }

//调用 grunt (default)
//-------------------------------------------------------------
//传参数

// module.exports = function(grunt){
// 	grunt.registerTask('default',function(name,age){
// 		grunt.log.writeln('hello everyone '+name + ' age:' +age);
// 	});
// }

//调用 grunt default:fangyou:18
//default不可省略
//-------------------------------------------------------------
//如何触发警告和致命错误

// module.exports = function(grunt){
// 	grunt.registerTask('interview',function(status){
// 		if(status == 'has_boy'){
// 			grunt.warn('write a red-black  tree with js');
// 		}else if(status == 'married'){
// 			grunt.fatal('write a b tree with js');
// 		}else{
// 			grunt.log.writeln('write hello world');
// 		}
// 		grunt.log.writeln('you have been accepted');
// 	});
// }


//-------------------------------------------------------------
//定义组合任务

// module.exports = function(grunt){
// 	grunt.registerTask('buy',function(status){grunt.log.writeln('buy')});
// 	grunt.registerTask('cook',function(){grunt.log.writeln('cook')});
// 	grunt.registerTask('eat',function(){grunt.log.writeln('eat')});

// 	grunt.registerTask('dinner',['buy','cook','eat']);
// }

//-------------------------------------------------------------
// 定义和传递配置参数

// module.exports = function(grunt){
// 	//初始化配置信息，可以定义属性和值
// 	grunt.initConfig({
// 		say:{
// 			world:'hello'
// 		}
// 	})
// 	grunt.registerTask('say',function(){
// 		var words = grunt.config.get('say.world');
// 		grunt.log.writeln(words);
// 		grunt.log.writeln(grunt.config.say.words);//无法通过这个取值
// 	});
// }

//-------------------------------------------------------------
// 定义多任务

// module.exports = function(grunt){
// 	//初始化配置信息，可以定义属性和值
// 	grunt.initConfig({
// 		eat:{//eat是一个task名字
// 			food:'rice',//food是一个target名字
// 			drink:'orange',
// 			vegatable:'potato'
// 		}
// 	})
// 	//多任务task
// 	grunt.registerMultiTask('eat',function(){
// 		for(var i=0;i<10;i++){
// 			grunt.log.writeln('I am eating' +this.target + ',' + this.data);
// 		}
// 	});
// }

//grunt eat
//只执行drink   grunt eat:drink

//-------------------------------------------------------------
// 创建文件和删除文件

// module.exports = function(grunt){
// 	//创建删除目录
// 	grunt.registerMultiTask('create',function(){
// 		grunt.file.mkdir('test');
// 	});
// 	grunt.registerMultiTask('clean',function(){
// 		grunt.file.delete('test');
// 	});
// }

//-------------------------------------------------------------

//使用模版，加注释
// module.exports = function(grunt) {
// 	//初始化配置信息，可以定义属性和值
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json')
// 	});
// 	grunt.registerTask('after', function() {
// 		//console.log(comment);
// 		var content = grunt.file.read('./test.js', 'utf-8');
// 		var comment = '<%=pkg.name%>  <%=pkg.author%>' + grunt.util.normalizelf('\n');
// 		comment = grunt.template.process(comment);
// 		grunt.file.write('./test2.js', '//' + comment + content);
// 	});
// }
//-------------------------------------------------------------
//使用外部命令
//批量加载插件  npm install load-grunt-tasks
//拷贝 npm install grunt-contrib-copy
//删除 npm install grunt-contrib-clean

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	var config = {
		app: 'app',
		dist: 'dist'
	}
	grunt.initConfig({
		config:config,
		copy:{
			html:{
				src:'./app/index.html',
				dest:'./dist/index.html'
			}
		},
		clean:{
			dist:{
				src:'./dist/index.html'
			}
		}
	});
}
//-------------------------------------------------------------
// module.exports = function(grunt) {
// grunt.initConfig({
//     concat: {
//         'dist/all.js': ['src/*.js']
//     },
//     uglify: {
//         'dist/all.min.js': ['dist/all.js']
//     },
//     jshint: {
//         files: ['gruntfile.js', 'src/*.js']
//     },
//     watch: {
//         files: ['gruntfile.js', 'src/*.js'],
//         tasks: ['jshint', 'concat', 'uglify']
//     }
// });


// // Load Our Plugins
// grunt.loadNpmTasks('grunt-contrib-jshint');
// grunt.loadNpmTasks('grunt-contrib-concat');
// grunt.loadNpmTasks('grunt-contrib-uglify');
// grunt.loadNpmTasks('grunt-contrib-watch');


// Register Default Task
// grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
// };