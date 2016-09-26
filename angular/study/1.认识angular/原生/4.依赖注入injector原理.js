/**
 * Created by mzr on 16/8/17.
 */

//这是要执行的函数
var greet = function(words, school) {

    console.log(words.text);
    console.log(school.text)
}

//就相当于我们的对象库,里面存放着所有能够注入的对象
var register = {

    words: {
        text: 'hello'
    },
    school:{
        text: 'zfpx'
    }
}

//自动注入服务对象并且运行参数里面的参数
var inject = function(func) {

    var source = func.toString();

    var matches = source.match(/function\s?\((.+)\)/);
    //matches 第一个参数是匹配到的整个参数
    //分组的参数从第二个开始

    var temArgs = matches[1];
    var arguments = temArgs.replace(/\s/g, '').split(',');
    var temArr = [];


    for(var i=0; i<arguments.length; i++) {

        var temObj = register[arguments[i]];
        temArr.push(temObj);
    }

    func.apply(null, temArr);

}

inject(greet);//框架自己依赖注入