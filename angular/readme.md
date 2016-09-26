#为什么要学习Angular.js
1. 面试要问
2. 现在使用最广泛的框架之一
3. 前后端分离，后端只提供数据接口，路由和模板渲染等都在前端完成
4. html和js分离,展示和逻辑分离
5. 减少JS代码,减少DOM元素查找，事件绑定等代码
6. 适合API的方式进行开发

#什么是MVC

1. Model 数据模型层
2. View 视图层，负责展示
3. Controller 业务逻辑和控制逻辑


#为什么需要MVC
1. 代码规模越来越大，切分责职
2. 相同逻辑代码要复用
3. 需求变更需要重构
4. 职责清晰，代码模块化
5. MVC只是手段，目标是模块化和复用
6. 核心目标是模块化和复用

#angular使用流程
1. 使用bower下载angular.js(http://school.zhufengpeixun.cn/course/40)
2. 引入angular.js脚本文件到当前页面
3. 通过指定ng-app定义angular应用的控制范围
4. 一切从模块开始，先定义模块
5. 在模块下声明控制器,注入$scope并进行初始化
6. 在DOM元素上通过ng-controller指定此控制器
7. 在此DOM元素下面编写表达式读取$scope上的属性值

#ng-app
1. 可以用ng-app 指令告诉Angular 应该管理页面中的哪一块,声明了ng-app的元素会成为$rootScope的起点，而$rootScope是作用域链的根,也就是说根下的作用域都可以访问它。
2. 
```
<html ng-app="myApp">
<body>
    {{ someProperty }}
</body>
```

#ng-model
1. 在AngularJS中，只需要使用ng-model指令就可以把应用程序数据绑定到HTML元素，实现model和view的双向绑定。
2. ng-model把相关处理事件绑定到指定标签上，这样我们就可以不用在手工处理相关事件(比如change等)的条件下完成对数据的展现需求
3. 如下示例，使用ng-model指令对数据进行绑定。
```
<div ng-app>
请输入任意值：<input type="text" ng-model="name">
你输入的为： {{ name }}
</div>
```

#ng-model原理
1. angular加载完成之后会启动，首先找ng-app指令
2. 找到后认为ng-app里面的所有的内容都归angular来管
3. 找子层标签里所有的指令，然后就可以找到ng-model
4. 找到后会生成数据模型，然后挂在作用域上面
5. 使用此数据模型的变量和视图进行绑定

#依赖注入
1.只需要声明要使用的对象,就可以得到,不需要自己创建

#表达式
1. 数据绑定，由两个花括号{{}}组成，可以把数据绑定到HTML，类似Javascript代码片段，可以包含文字、运算符和变量
2. 输出变量的值
```
<div ng-app ng-init="name='zfpx'">
    {{name}}
  </div>
```
3.进行表达式计算
```
<div ng-app ng-init="width=3;length=5">

  长方形的面积： {{ width * length }}

  </div>
```
4. 输出对象的值
```
<div ng-app="" ng-init="numbers=['1','2','3']">  
  第一个数字为： {{ numbers[0] }}
  </div>
```

#ng-controller
##用这个指令在一个DOM元素上指定controller,控制器可能嵌套
```
<div ng-controller="AncestorController">
    {{ ancestorName }}
    {{ childName }}
    <div ng-controller="ChildController">
        {{ ancestorName }}
        {{ childName }}
    </div>
</div>
```

#ng-bind
1. ng-bind和AngularJS表达式功能相似，但ng-bind是在angular解析渲染完毕后才将数据显示出来的。
2. 如下使用ng-bind指令绑定把应用程序数据。
```
<div ng-app="">
      请输入一个名字：<input type="text" ng-model="name">
      Hello <span ng-bind="name"></span>
       <span ng-bind="say"></span>
       <span ng-bind-html="say"></span>
       <span ng-bind-template="say"></span>
       <span ng-non-bindable="say"></span>
  </div>
```
3. 使用花括号语法时，因为浏览器需要首先加载页面，渲染它，然后AngularJS才能把它解析成你期望看到的内容，所以对于首个页面中的数据绑定操作，建议采用ng-bind，以避免其未被渲染的模板被用户看到。

#ng-init
1. ng-init指令初始化应用程序数据，也就是为AngularJS应用程序定义初始值
2. 如下所示，我们为应用程序变量name赋定初始值。
```
<div ng-app="" ng-init="name='zfpx'">
  </div>
```
3. 不仅可以赋值字符串，也可以赋值为数字、数组、对象，而且可以为多个变量赋初始值 ```

#ng-include
1. ng-include就是将多个页面的公共页面提取出来，如header.html，footer.html等，在每个页面公用
```
<div ng-include="'header.html'"></div>
```

#模块之间如何依赖依赖注入
//创建、获取angular中的模块
    angular.module(); 

// 传递参数多于一个表示新建模块;空数组代表该模块不依赖其他模块
var createModule = angular.module("myModule", []);

// 只有一个参数(模块名),代表获取模块,如果模块不存在,angular框架会抛异常
var getModule = angular.module("myModule");

该函数既可以创建新的模块，也可以获取已有模块，是创建还是获取，通过参数的个数来区分。

angular.module(name, [requires], [configFn]);

- name：字符串类型，代表模块的名称；
- requires：字符串的数组，代表该模块依赖的其他模块列表，如果不依赖其他模块，用空数组即可；
- configFn：用来对该模块进行一些配置。

#指令的原理
1. 加载 加载angular.js,找到ng-app指令，确定应用的边界
2. 编译 遍历DOM，找到所有指令，根据指令中的template、replace和transclude转换DOM结构，如果存在compile函数就调用
3. 链接 对每个指令操作link函数,link函数一般用来操作DOM，绑定事件监听器

#服务
1. 服务是能提供特定功能的一个对象,有以下特点
1) service都是单例的
2) angular会自动创建实例并注入，不需要手工创建
3) service在整个应用的生命周期存在，可以共享数据

#创建服务组件
1. 在AngularJS中创建一个服务组件很简单，只需要定义一个具有$get方法的构造函数， 然后使用模块的provider方法进行登记：
```
//定义构造函数
  var myServiceProvider = function(){
      this.$get = function(){
          return ....
      };
  };
  //在模块中登记
  angular.module("myModule",[]).provider("myService",myServiceProvider);
```

#可配置的服务
1. 有时我们希望服务在不同的场景下可以有不同的行为，这意味着服务可以进行配置。
```
angular.module("myModule",[])
    .config(["myServiceProvider",function(myServiceProvider){

  }]);
```
2. 注意：服务提供者provider对象在注入器中的登记名称是：服务名+Provider。 例如： $http的服务提供者实例名称是"$httpProvider"

#语法糖
1. 使用模块的provider方法定义服务组件，在有些场景下显得有些笨重。AngularJS友好 地提供了一些简化的定义方法，这些方法通常只是对provider方法的封装， 分别适用于不同的应用场景：
1) factory 使用一个对象工厂函数定义服务，调用该工厂函数将返回服务实例。
2) service 使用一个类构造函数定义服务，通过new操作符将创建服务实例。
3) value 使用一个值定义服务，这个值就是服务实例。
4) constant 使用一个常量定义服务，这个常量就是服务实例。

#factory方法
1. factory方法要求提供一个对象工厂，调用该类工厂将返回服务实例。
```
var myServiceFactory = function(){
        return ...
    };
    angular.module("myModule",[])
    .factory("myService",myServiceFactory);
```
2. AngularJS会将factory方法封装为provider，上面的示例等同于
var myServiceFactory = function(){
    return ...
};
angular.module("myModule",[]).provider("myService",function(){
    this.$get = myServiceFactory;
});

#service方法
1. service方法要求提供一个构造函数，AngularJS使用这个构造函数创建服务实例：
```
var myServiceClass = function(){
        this.method1 = function(){...}
    };
    angular.module("myModule",[]).service("myService",myServiceClass);
```

2. AngularJS会将service方法封装为provider，上面的示例 等同于：
```
var myServiceClass = function(){

    };
    angular.module("myModule",[]).provider("myService",function(){
        this.$get = function(){
            return new myServiceClass();
        };
    });
```

#value
1. 有时我们需要在不同的组件之间共享一个变量，可以将这种情况视为一种服务： provider返回的总是变量的值。 value方法提供了对这种情况的简化封装：
```
angular.module("myModule",[])
.value("myValueService","19841230");
```

2. AngularJS会将value方法封装为provider，上面的示例 等同于：
```
angular.module("myModule",[])
.provider("myService",function(){
    this.$get = function(){
        return "19841230";
    };
});
```

#constant方法
1. 有时我们需要在不同的组件之间共享一个常量，可以将这种情况视为一种服务： provider返回的总是常量的值。 constant方法提供了对这种情况的简化封装：
```

angular.module("myModule",[])
    .constant("myConstantService","hello zfpx");
```

2. 和value方法不同，AngularJS并没有将constant方法封装成一个provider，而仅仅 是在内部登记这个值。这使得常量在AngularJS的启动配置阶段就可以使用（创建任何 服务之前）：你可以将常量注入到模块的config()方法中。



#scope的绑定策略
1. @ 把当前属性作为字符串传递。你还可以绑定来自外层scope上的值，在属性中插入{{}}即可
2. = 与父scope中的属性进行双向绑定

#link:在指令中操作DOM
1. 如果需要在指令中操作DOM，我们需要在对象中定义link属性
2. 注意link函数的参数，AngularJS在编译时负责传入正确的值
3. 四个参数
1）scope	指令对应的scope对象。如果指令没有定义自己的本地作用域，那么传入的就是外部的作用域对象
2）iElement	指令所在DOM对象的jqLite封装。如果使用了template属性，那么iElement对应 变换后的DOM对象的jqLite封装
3）iAttrs	指令所在DOM对象的属性集。这是一个Hash对象，每个键是驼峰规范化后的属性名
4）controller	控制器的实例,在所有指令间共享,可以作为指令交流的通道


#双向数据绑定
1. 数据变化响应界面显示
2. UI变化影响数据
3. ng-model 将$scope变量与输入框绑定

#指令
1. ng-bind 绑定html元素 <span ng-bind="say"></span>
2. ng-click  为当前元素click事件绑定$scope上的对应方法 <span ng-click="show(say)">show</span>
3. ng-if 布尔类型 为true执行内部指令，为false时不执行内部指令<div ng-if="true"><span>show</span></div>
4. ng-class 定义元素的class样式,属性值如{'class1':expression1,'class2':expression2} ng-class="{'has-error':username.length>6}"
5. ng-show 布尔类型 为true时显示 false时隐藏 <button ng-click="show = !show">切换</button> <div ng-show="show">ng-show欢迎来到珠峰培训</div>
6. ng-hide 布尔类型 为false时显示 true时隐藏 <button ng-click="show = !show">切换</button>  <div ng-hide="show">ng-hide欢迎来到珠峰培训</div>
7. ng-repeat 遍历数组
```
<tr ng-repeat="item in items">
            <td>{{item.title}}</td>
            <td>{{item.price | currency}}</td>
            <td><input type="text" ng-model="item.quantity"/></td>
            <td>{{item.price*item.quantity | currency}}</td>
        </tr>
        <tr>
            <td>总金额 {{total()}}</td>
  </tr>
```

#服务
##服务是能提供特定功能的一个对象,有以下特点
1. service都是单例的
2. angular会自动创建实例并注入，不需要手工创建
3. service在整个应用的生命周期存在，可以共享数据


#http服务
##$http是对jquery ajax的封装

```
$http({
            method:'GET',
            url:'books.json'
        }).success(function(data,status,headers,config){
            $scope.books = data;
        }).error(function(data,status,headers,config){

        })
```

#自定义服务
##可以用模块的factory方法定义自己的服务
```
angular.module('appModule').factory('bookService',function(){
        var booklist = ['angular','node.js'];
        return {
            list:function(){
                return booklist;
            },
            add:function(bookname){
                booklist.push(bookname);
                return booklist;
            }
        }
    });

```

#过滤器
1. filter是用来数据格式化的服务
2. filter可以级联使用(用|分隔)
3. filter是可以传递参数的

# currency 货币过滤器
```
{{ currency_expression | currency : symbol}}
{{amount | currency:"USD$"}}
```

#Model模型使用
1. MVC借助于$scope实现
2. $scope是一个基本javascript对象
3. $scope是一个基本javascript对象
4. 子$scope对象遵循原型继承,会继承父$scope上的属性和方法
5. 每一个angular应用只有一个根$rootScope对象(ng-app)上
6. $scope是MVC和双向数据绑定的基础
7. $scope是表达式的执行上下文环境
8. 有自己的生命周期 创建->注册监控者->模型变化->检测变化->销毁
9. $scope提供一些工具方法 $watch/$apply
10. $scope可以传播事件，类似DOM事件，可以向上也可以向下传播

#控制器
1. ng-controller指令就是用来定义应用程序控制器的，并且同时创建了一个新的作用域关联到相应的DOM元素上
2. 不要复用Controller,一个控制器只负责一个视图
3. 不要在控制器中操作DOM，使用指令
4. 不要在Controller里做数据过滤和格式化，使用filter过滤器
5. 控制器之间不要互相直接调用，控制器之间的交互通过事件交互




#ps
1. angular数据双向绑定的原理: 视图值发生变化,会改变scope值
scope值发生变化又会通过脏值检查的方式通知视图
































