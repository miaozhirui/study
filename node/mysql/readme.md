
##什么是MySQL
	1. MySQL是一个开源的关系型数据库管理系统
	2. 数据库是指用特定方式存储数据的仓库
	3. 关系型是指数据库中的各种实体之间可以建立关系

##RDBMS 术语
	1. 数据库: 数据库是一些关联的表的组成的集合
	2. 数据表: 表是数据的载体。在一个数据库中的表看起来像一个简单的excel表格
	3. 列: 一列包含了相同类型的数据, 例如用户表中的用户名
	4. 行：一行是一组列组合成的数据，例如一条用户的数据
	5. 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据
	6. 外键：外键可以引用主键数据，用于关联两个表
##mysql登录
	1. 登录 mysql -uroot -p123456 -h127.0.0.1
		mysql	-u	用户名
		mysql	-p	密码
		mysql	-h	指定服务器的IP
		mysql	-V	输出版本号并退出
	2. 授权 GRANT ALL PRIVILEGES ON studb.* TO 'root'@'192.168.1.1' IDENTIFIED BY '123456' WITH GRANT OPTION;
	3. 远程访问 /etc/mysql/my.cnf 注释掉 #bind-address

##mysql退出
	1. exit;
	2. quit;

##mysql语句规范
	1. mysql语句规范
	2. 数据库名称表名称字段名称全部小写
	3. SQL语句必须以分号结尾

##数据库语句
	1. 创建数据库	CREATE DATABASE db_name CHARACTER SET charname	create database studb CHARACTER SET utf8
	2. 查看当前数据库	SHOW DATABASES	show databases
	3. 删除数据库	DROP DATABASE db_name	drop database studb

##数据类型
###选择最合理最合适的数据类型
	1. INT	整数
	2. FLOAT	浮点数
	3. DATETIME	日期日期型
	4. DATE	日期日期型
	5. CHAR(M)	定长字符类型
	6. VARCHAR(M)	不定长字符类型

##数据表操作
	1. 打开数据库	USE db_name	use studb
		use studb
	2. 创建表	CREATE TABLE table_name(column_name data_type,...)
		CREATE TABLE student(id int identify,name varchar(20),age int)
	3. 查看数据表	SHOW TABLES 
		show tables
	4. 查看表结构	SHOW COLUMNS FROM tbl_name
		show columns from student

##行记录操作
	1. 插入记录	INSERT INTO tbl_name[(col_names...)] values (val...)
		insert into student(name,age) values('张静',18)
	2. 查询记录	SELECT expr... FROM tbl_name
		select * from student

##列级约束
	1. AUTO_INCREMENT	自动递增
		自动编号，且必须与主键组合使用，数据类型,起始值为1，每次增量为1
	2. PRIMARY KEY 主键约束
		每张表只能存在一个主键，主键保证记录的唯一性，主键自动为NOT NULL
	3. FOREIGN KEY 外键约束
		保持数据一致性，实现一对一或一对多的关系

##记录操作
	1. 插入记录	INSERT INTO tbl_name[(col_names...)] values (val...)
		insert into student(name,age) values('张静',18)
	2. 更新记录	UPDATE tbl_name SET col_name1=expr1,col_name2=exp2 WHERE where_condition
		update student where age = age+1
	3. 删除记录	DELETE tbl_name where where_condition
		delete from student where age < 20
##SELECT查询
	SELECT select_expr 查询表达式，列以英文逗号分隔，星号表示所有列
	[
	  FROM tbl_name  要查询的表
	  WHERE where_condition 条件表达式，对记录进行过滤，如果不指定WHERE则查询所有记录
	  GROUP BY col_name [ASC|DESC] 以哪列作为分组
	  HAVING group_condition 对分组后的结果进行过滤
	  ORDER BY col_name [ASC|DESC] 按哪些列进行排序
	  LIMIT offset,row_count 从哪条开始查询，查询多少条
	]
##学生表
	student (id 主键,name 名称)


















