// 写一个自动加载的函数

var gulp = require('gulp');
var fs = require('fs');
var $ = load();

console.log($)

gulp.task('concat', () => {

    gulp.src('../app/*.js')
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('../dist'));
})




function load() {

    var devDependencies = JSON.parse(fs.readFileSync('../package.json', 'utf8')).devDependencies;

    var $ = {};
    for (var item in devDependencies) {

        if (item.indexOf('gulp-') == 0) {

            $[item.slice('5')] = require(item);
        }
    }

    return $;
}
