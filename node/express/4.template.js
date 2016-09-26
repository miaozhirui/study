var express = require('express');
var path = require('path');

var app = express();

/**
 * 从后台获取的内容类型
 * 1.动态的
 * 2.静态的
 * 3.动静结合
 */

//模板使用的三部曲

//配置属性值
//1.
app.set('view engine', 'ejs');//设置默认引擎
//2.
app.set('views', path.join(__dirname, '/views'));//指定模板存放路径

//path.resolve('views')获取当前文件的绝对路径
app.get('/', function(req, res) {

    //第一个参数是模板的名称, 第二个参数是模板所需要的数据
    //3.
    res.render('index', {title:'首页', books: {
        name: '大刀王五'
    }});

    //4.渲染原理就会字符串替换
})



app.listen(8888);