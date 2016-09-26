var File = require('vinyl');

var coffeeFile = new File({
  cwd: "/",//当前工作目录
  base: "/test/",//基准路径
  path: "/test/file.coffee",//文件的绝对路径
  contents: new Buffer("test = 123")//文件的内容
});