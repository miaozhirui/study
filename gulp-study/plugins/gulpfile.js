var gulp =  require('gulp');
var prefixer = require('./prefixer');

gulp.task('default', function() {

	gulp.src('./app/*.js')
		.pipe(prefixer('/*紫色医疗*/\n'))
		.pipe(gulp.dest('./dist'));
})
