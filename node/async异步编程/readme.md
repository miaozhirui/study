##为什么要使用异步编程
	1. 异步就是一个任务不连续执行
	2. 同步就是一个任务连接执行完
	3. 异步编程可以在单线程的情况下提高并发
## 异步编程时如何实现流程控制
	1. 回调函数callbacks
	2. 事件机制(监听某个事件,当一个任务执行完之后触发这个时间,那么监听任务就可以得以执行)
	3. Promise
##回调函数callbacks
	```
		fs.readFile('1.txt','utf8',function(err,data){
		   fs.readFile(data,'utf8',function(err,data2){
		       console.log(data2);
		   });
		})
	```
##事件
	```
		var EventEmitter  = require('events');
			var events = new EventEmitter();

			events.on('done',function(filename){
			    task2(filename);
		});
	```

##Promise
	1. Promise表示一个异步操作的最终结果。
	2. Promise最主要的交互方法是通过将函数传入它的then方法从而获取得Promise最终的值或Promise最终最拒绝（reject）的原因。
	3. promise状态由内部控制，外部不可变
	4. 状态只能从pending到resovled, rejected，一旦进行完成不可逆 

##async
	1.series(tasks, [callback])
	多个函数依次执行，之间没有数据交换
	```
		async.series([function(callback){
        callback(null, "tv is over");
		    },function(callback){
		        callback(null, 'homework is down');
		    }],function(err, results) {
		    console.log(results);
		});
	```
	2.parallel(tasks, [callback])
	多个函数并行执行
	```
		console.time('start');
		async.parallel([
		        function (callback) {
		            setTimeout(function () {
		                callback(null, 'one');
		            },2000);
		        },
		        function (callback) {
		            setTimeout(function () {
		                callback(null, 'two');
		            },3000);}],
		    function (err, results) {console.log(results);});
	```
	3. waterfall(tasks, [callback])
	多个函数依次执行，且前一个的输出为后一个的输入
	```
		async.waterfall([function(callback){
        callback(null, "水");
		    },function(data,callback){
		        callback(null, data+'+咖啡');
		    },function(data,callback){
		    callback(null, data+'+牛奶');
		}],function(err, results) {
		    console.log(results);//水+咖啡+牛奶});
	```
	4. auto(tasks, [callback])
	多个函数有依赖关系，有的并行执行，有的依次执行
	```
		async.auto({
	    getWater: function(callback){
	        callback(null, 'Water');},
	    getFlour: function(callback){
	        callback(null, 'Flour');},
	    mixFlour: ['getWater', 'getFlour', function(callback, results){//{ getWater: 'Water', getFlour: 'Flour' }
	        callback(null, results['getWater']+','+results['getFlour']+','+'mixFlour');}],
	    steam: ['mixFlour', function(callback, results){
	        callback(null, results['mixFlour']+',steam');}]
	}, function(err, results) {
	    console.log('err = ', err);});
	```
	5. forEach
	并行异步迭代一个数组
	```

	forEach
	并行异步迭代一个数组
	var arr = [{name:'zfpx1'},{name:'zfpx2'}];
	async.forEach(arr, function(item, callback) {
	    console.log('1.1 enter: ' + item.name);
	    setTimeout(function(){callback(null);}, 1000);
	}, function(err,result) {
	    console.log('1.1 err: ' + err);
	});
	```

	6.eachSeries
	串行异步迭代一个数组
	```
		async.eachSeries([1,2,3],function(item,next){
	    setTimeout(function(){console.log(item);next();
	    },2000)
	},function(){
	    console.log('all over');})
	```




















