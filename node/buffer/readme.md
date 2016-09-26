#什么是Buffer
1. 缓冲区Buffer是暂时存放输入输出数据的一段内存。
2.JS语言自身只有字符串数据类型，没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
3.NodeJS提供了一个Buffer对象来提供对二进制数据的操作
4.是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
5.Buffer好比由一个八位字节元素组成的数组，可以有效的在javascript中表示二进制数据

ps: buffer类似于有八个字节元素组成的数组


#什么是字节
1.字节(Byte)是计算机存储时的一种计量单位，一个字节等于8位二进制数
2.一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
3.字节是通过网络传输信息的单位
4.一个字节最大值十进制数是255
 
#定义buffer
1.new Buffer(size)
2.数组创建 new Buffer(array);
3.字符串创建 new Buffer(str,[encoding]);

#字符串和Buffer转换
1.Buffer转字符串 Buffer.toString([encoding],[start],[end])
2.字符串转Buffer new Buffer(str,[encoding]);

#Buffer常用方法
1.合并Buffer Buffer.concat([buf1,buf2],length)
2.复制Buffer Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)

#进制转换
1.将任意进制字符串转换为十进制
	* parseInt("11", 2); // 3 2进制转10进制
	* parseInt("77", 8); // 63 8进制转10进制
	* parseInt("e7", 16); //175 16进制转10进制
2.将10进制转换为其它进制字符串 Object.toString(n) n表示进制
	* (3).toString(2)) // "11" 十进制转2进制
	* (17).toString(16) // "11" 十进制转16进制
	* (33).toString(32) // "11" 十提制转32进制

#字符集和字符编码
1.字符集是多个字符的集合，常见字符集名称：ASCII字符集、GB2312字符集和Unicode字符集等
2.ASCII 码使用指定的7位或8位二进制数组合来表示128或256种可能的字符
3.Unicode源于一个很简单的想法：将全世界所有的字符包含在一个集合里
4.字符编码是字符集在计算机中的存储方式,定义如何存储字符集
5.http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html


