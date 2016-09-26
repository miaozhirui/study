#socket.io

1.Socket.IO是一个WebSocket库，包括了客户端的js和服务器端的nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用
2.易用性
3.跨平台
4.自适应

#安装部署
```
npm install socket.io
```

#启动服务
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('客户端已经连接');
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send('sever:' + msg);
    });
});
server.listen(80);
```

#客户端引用
服务端运行后会在根目录动态生成socket.io的客户端js文件，客户端可以通过固定路径/socket.io/socket.io.js添加引用。 首先添加网页index.html,并在网页中引用客户端js文件：

#客户端接发消息
```
1.window.onload = function(){
          var socket = io.connect('/');
          socket.on('connect',function(){
              document.write('连接成功!');
              socket.send('hello server');
          });
          socket.on('message',function(msg){
              console.log(msg);
          });
      };
```

#服务器接发消息
1. 成功建立连接后，我们可以通过socket对象的send函数来互相发送消息
2.
```
io.on('connection', function (socket) {
    console.log('客户端已经连接');
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send('sever:' + msg);
    });
});
```

#命名空间
1. 命名空间着实是一个非常实用好用的功能。我们可以通过命名空间，划分出不同的空间，在空间里的广播和通信都不会影响到空间以外的客户端
```
var io = require("socket.io").listen(server);
var chart = io.of("/chat").on("connection", function (socket) {
    socket.send("欢迎访问chat空间!");
    socket.on("message", function (msg) {
        console.log("chat命名空间接收到信息:" + msg);
    });
});
var chat = io.connect("http://localhost:1337/chat"),
```

#房间
1. 命名空间下面又可以划分不同的房间,在服务器端可以进入不同的房间
2.
```
socket.join('chat');//进入chat房间
socket.leave('chat');//离开chat房间
```
#命名空间和房间
1. socket.io支持命名空间，默认是的命名空间是 '/'
2. 命名空间下面可以创建房间，没有默认的房间
3. socket.io支持命名空间，默认是的命名空间是 '/'
   命名空间下面可以创建房间，没有默认的房间
   socket 一定是属于某个命名空间,但可以不属于任何房间


#不包括发送者
1. 发送消息给当前的请求socket socket.emit('message', "this is a test");
2. 向除发送者之外的所有人发消息 socket.broadcast.emit('message', "this is a test");
3. 向game房间里的除了发送人之外的所有用户发消息 socket.broadcast.to('game').emit('message', 'nice game');

#包括发送者
1. 发送给包括发送者在内的所有人 io.sockets.emit('message', "this is a test");
2. 发送给包括发送者在内的game房间内的所有人 io.sockets.in('game').emit('message', 'cool game');
