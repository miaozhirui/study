/**
 * Created by mzr on 16/8/10.
 */
var Server = require('ws').Server;



var wss = new Server({

    port: 8080
})
//服务器具备的两个条件
//1.在特定的ip和端口上面监听客户端的请求
//2.能根据客户端的请求进行响应

//监听客户端的请求,当有客户端连接来的时候调用回调函数
wss.on('connection', function(ws) {
    //监听客户端发送过来的数据
    ws.on('message', function(message) {
        console.log(11)
        console.log('服务器接收到:%s', message);
        //服务器端向客户端发送消息
        ws.send('服务器回复:'+message);
    })
})