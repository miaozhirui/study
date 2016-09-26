var express = require('express');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.all("*", function(req, res) {

    var filePath = path.join(__dirname, req.path);

    fs.readFile(filePath, function(err, data){

        if(data){

            res.end(data);

        } else {

            res.send('文件不存在');
        }
    })
})


app.listen(8888);