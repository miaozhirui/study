/*
常用的插件
gulp-load-plugins自动加载
编译Sass: gulp-sass
编译less: gulp-less
合并文件: gulp-concat
压缩js文件: gulp-uglify
重命名js文件: gulp-rename
优化图像大小: gulp-imagemin
压缩css文件: gulp-minify-css
创建本地服务器: gulp-connect
实时预览: gulp-connect
*/


var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');

gulp.task('1', function(){

	console.log(1)
})

// gulp.task('2', function(callback){//如果有callback这样的回调函数的话，说明这是异步任务,default任务会在2任务执行之后再执行

// 	setImmediate(function() {
// 		fs.writeFile('1.txt', 'hello', function(err) {

// 			callback()
// 		})

// 	})

// })

gulp.task('2', function(callback){//如果有callback这样的回调函数的话，说明这是异步任务,default任务会在2任务执行之后再执行
	var defer = Q.defer();
	setImmediate(function() {
		fs.writeFile('1.txt', 'hello', function(err) {

			defer.resolve();
		})

	})

	return defer.promise;

})

gulp.task('3', function(){

	console.log(3)
})

gulp.task('default', ['1', '2', '3'], function(){

	fs.readFile('1.txt', 'utf8', function(err,data) {

		if(err) {
			console.log(err);
		}
		console.log(data,1);
	})
})