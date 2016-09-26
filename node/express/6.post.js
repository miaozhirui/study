/**
 * Created by mzr on 16/9/2.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));

//extended为true的时候,会把queryString把查询字符串转为对象,如果为false的时候会用bodyparser自己写的方法去转成对象,功能是一样的
app.use(bodyParser.urlencoded({extended: true}));//此中间件会把请求体提取出来放在req.body上

//urlencoded就是将请求体序列化成查询字符串提交过来,接受到的事查询字符串

// app.use(bodyParser.json());接收到的事json字符串
// app.use(bodyParser.json());

//ps:  客户端想服务器发送的请求体常用的格式就是:查询字符串和json
//ps: bodyParser.urlencoded和bodyParser.json会判断请求头的Content-type,如果是application/x-www-form-urlencoded
//会用bodyParser.urlencoded来解析,否则什么都不做;如果是json的话会用bodyParser.json来解析,否则什么都不做

app.post('/reg', function(req, res) {

    console.log(req.body);
    res.end('reg');
})

app.listen(8888)
