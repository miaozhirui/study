var gulp = require('gulp');

gulp.task('hello', function(){

	console.log(11)
})

gulp.task('default', ['hello'], function() {

	// gulp.src('app/src.js')
	// 	.pipe(gulp.dest('dist'))

	gulp.src(['app/**/*.js', '!app/jquery/jquery.js'], {base: 'app'})
		.pipe(gulp.dest('dist'));
})