var express = require('express');

var app = express();


app.get('/', function(req, res) {

    //send可以自动判断参数类型,自动转换响应信息,并且自动设置content-type
    res.send('helddlo world');
})


app.get('/hello', function(req, res) {

    res.send('hello');
})

//启动服务器
app.listen(8080);