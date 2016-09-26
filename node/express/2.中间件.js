var express = require('express');

var app = express();

//计算一个处理请求一共花了多少时间

//写一个中间件用来统计一个请求花了多长时间
app.use(function(req, res, next) {

    res.startTime = Date.now();

    //因为这是全局唯一的,所以这中方法是更好
    // console.time('cost');
    var end =  res.end;
    res.end = function() {

        end.apply(res, Array.prototype.slice.call(arguments));

        // console.timeEnd('cost')
        console.log('timecost' , Date.now() - res.startTime);
    }

    next();

})
//express中间件, use使用中间件

//中间件通过next可以选择调还是不调下一个中间件或者请求
app.use(function(req, res, next) {

    res.mny = 100;

    next()
})

//只有匹配到/hello才进行处理,否则不处理
app.use('/hello',function(req, res, next) {

    res.mny = res.mny-10;

    next()
})

app.use(function(req, res, next) {

    res.mny = res.mny-30;

    next()
})

app.use(function(req, res, next) {

    res.mny = res.mny-20;

    next()
})

app.get('/money', function(req, res) {

    res.send(""+res.mny);
})

app.get('', function(req, res) {
    var tem =1;
    for(var i=0; i<100000; i++) {
        tem = i
    }
    res.send(""+i);
})



app.listen(8888);