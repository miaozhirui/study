/**
 * Created by mzr on 16/8/11.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {

    //获取绝对路径
    res.sendFile(path.join(__dirname, './index.html'));
})

//先创建一个HTTP服务器
var server = require('http').createServer(app);

//再创建socket.io服务器
var io = require('socket.io')(server);
var clients = {};
//监听客户端的连接事件
io.on('connection', function(socket) {

    var username;

    socket.send({user: '系统', msg: '请输入用户名'})
    //监听客户端的消息
    socket.on('message', function(msg) {

        var result = msg.match(/^@(.+)\s(.+)$/);

        if(result) {

            var toUser= result[1];
            var content = result[2];

            if(clients[toUser]) {//通过用户名把对应的socket取出来

                clients[toUser].send({user: username, msg: '[私聊]'+content})
            } else {

                socket.send({user:'系统', msg: '你想私聊的人不存在'});
            }

        } else {

            if(username) {

                //把客户端发送的消息广播给所有的用户端
                for(var i in clients) {

                    clients[i].send({user: username, msg: msg});
                }

            } else {

                username = msg;

                //属性名是用户名,值是对应的socket对象
                clients[username] = socket;
                socket.send({user:'系统', msg: '你的用户名已经设置成'+username});
            }
        }



    })

})

//监听客户端的额连接事件
server.listen(8080);