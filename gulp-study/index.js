http://school.zhufengpeixun.cn/course/32/learn#lesson/242

一、什么是gulp   Gulp是可以自动化执行任务的工具
把一个文件拷贝到另外一个位置
把多个 JS 或者 CSS 文件合并成一个文件,以减少网络请求数
对JS文件和CSS进行合并压缩,以减少网络流量
把Sass或者Less文件编译成CSS
压缩图像文件,以减少网络流量
创建一个可以实时刷新页面内容的本地服务器等等。

二、
gulp -v||--version
gulp --gulpfile 指定gulpfile文件名
gulp --cwd 指定gulp文件的目录
gulp -T 显示gulp任务的依赖关系

三、
gulp.dest()里面的参数是个目录

四、
一共四个api
src, task, dest, watch

gulp.src//用来读文件的
gulp.dest//用来写文件的，给gulp.dest写的参数只能决定目录名，文件名是由导入他的文件流决定的

五、
gulp.src或许的是一个文件流，是一个虚拟的文件格式
vitual file format

六、
gulp.src获取的不是原始的文件流, 是虚拟的文件对象流

七、
gulp.src('app/**/', {base:'app'})//指定base说明，当gulp.dest的时候，会拼上全路径(除去base指定的)

八、
gulp.watch('/app/**/*.js', ['copy', less]);
gulp.watch('app/**/*.js', function(event) {

	// event.path, event.type
})

九、
// 通过gulp.watch监听,为文件添加增删改查的动作
























