ps : 一分插入九分查询;

##select 查询
	```
		SELECT select_expr 查询表达式，列以英文逗号分隔，星号表示所有列
			[
			  FROM tbl_name  要查询的表
			  WHERE where_condition 条件表达式，对记录进行过滤，如果不指定WHERE则查询所有记录
			  GROUP BY col_name [ASC|DESC] 以哪列作为分组
			  HAVING group_condition 对分组后的结果进行过滤
			  ORDER BY col_name [ASC|DESC] 按哪些列进行排序
			  LIMIT offset,row_count 从哪条开始查询，查询多少条
			]
	```