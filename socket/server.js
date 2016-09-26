/**
 * Created by mzr on 16/8/11.
 */
var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {

    //获取绝对路径
    res.sendFile(path.join(__dirname, './index.html'));
})

//先创建一个HTTP服务器
var server = require('http').createServer(app);

//再创建socket.io服务器
var io = require('socket.io')(server);

//监听客户端的连接事件
io.on('connection', function(socket) {
    
    //socket代表与某个客户端的连接对象
    socket.on('message', function(msg) {
        
        socket.send('server:'+msg)
    })

    socket.send('server')
})

//监听客户端的额连接事件
server.listen(8080);