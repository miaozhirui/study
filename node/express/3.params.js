var express = require('express');

var app = express();

// app.use(function(req, res, next) {
//
//     next();
// })

app.get('/hello', function(req, res) {

    console.log(req.hostname);
    console.log(req.path);
    console.log(req.query);
    console.log(Object.keys(req));


    res.send('欢迎来到首页')
})

//将字符串放在路径里面,荣国这种方式获取
//路径参数 把向服务器传递的参数放在路劲里面
app.get('/user/:id/:age', function(req, res) {

    console.log(req.hostname);
    console.log(req.path); //路径 取得是端口号和问号之间的路径
    console.log(req.query);//获取查询字符串里面的参数
    console.log(req.params)//获取路径里面的参数
    // console.log(Object.keys(req));


    res.send('欢迎来到首页')
})

app.listen(8888);