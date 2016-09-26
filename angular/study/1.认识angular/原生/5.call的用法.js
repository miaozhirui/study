/**
 * Created by mzr on 16/8/18.
 */

function call(self) {

    //1.修改函数中的this的指针
    //2.让函数执行
}

// console.log(Function.prototype.call)

var obj = {
    name: 'miaozhirui'
}

function say(a,b,c) {

    console.log(this.name);
    console.log(a,b,c)
}

// say.call(obj)



//自定义call方法(满足两个条件:1.修改函数中this的指针, 2.让函数执行)
//自定义call方法
Function.prototype.myCall = function(thisObj) {

    var source = this.toString();
    var args = Array.prototype.slice.call(arguments).slice(1);

    source = source.replace(/this/, function() {

        return "thisObj";
    })

    eval("("+source+").apply(null, args)");
    // console.log(source);
}


say.myCall(obj,1,2,3)