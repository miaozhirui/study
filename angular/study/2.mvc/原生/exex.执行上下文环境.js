/**
 * Created by mzr on 16/8/24.
 */
function one() {
    var first = 'first';

    function two() {
        var second = "first";
    }

    two()
}

one();

/**
 * 1.当启动的时候先生成一个全局上下文环境(就是一个对象) window
 *  this=window
 *  全局属性 Math Reg Array
 *  提升上来的函数定义 var 变量
 *
 * 2. 当进入一个函数的时候回产生一个函数级的上下文环境
 *   this
 *   激活对象(var 变量, function定义)
 *   参数
 */