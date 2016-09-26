function Scope() {

    this.$$watchers = [];//观察者的数组
}

//当scope上expr变化的时候执行回调监听(类似于事件里面的on方法,监听某个事件,触发某个事件的时候,执行回调函数)
Scope.prototype.$watch = function(expr, listener) {

        var watcher = {

            expr: expr,
            fn:listener,
            last: undefined
        }

    this.$$watchers.push(watcher);
}
Scope.prototype.$digest = function() {

    var dirty;
    var count = 10;

    do{
        dirty = this.$digestOnce();
        if(dirty && count ==0) {

            throw Error('10 $digest() iterations reached.');
        }
    } while (dirty && count--);
}
//当scope上面的值发生改变的时候,就通知视图发生变化
//digest脏值检测
Scope.prototype.$digestOnce = function(expr, listener) {

    var self = this;
    var dirty = false; //是否有脏数据,本次循环当中看看是否有变化的值

    this.$$watchers.forEach(function(watcher) {

        var newVal = self[watcher.expr];//scope上面当前的值
        var oldVal = watcher.last;

        if(newVal != oldVal){//现在变化了该怎么办

            watcher.fn(newVal, oldVal);
            watcher.last = newVal;
            dirty = true;//已经脏了
        }
    })

    return dirty;
}

//应用变化,一般可以由我们来调用
Scope.prototype.$apply = function(expr, listener) {

    this.$digest();
}



var scope = new Scope();

scope.one = 0;
scope.two = 0;

scope.$watch('one', function(newVal, oldVal) {

    console.log(newVal, oldVal)
    scope.two = Math.random();

})

scope.$watch('two', function(newVal, oldVal) {

    scope.one = Math.random();
})

scope.one = 1;
scope.$apply();


