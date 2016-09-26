var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();


//需求,根据用户输入的地址返回相应的内容

//express.static是node提供的唯一个用来提供静态资源服务的中间件
//会把/public作为根目录
app.use(express.static(path.join(__dirname, '/public')));

// app.use(function(req, res, next) {
//
//     fs.createReadStream(__dirname+'/public'+req.url).pipe(res);
// })

app.listen(8888);
