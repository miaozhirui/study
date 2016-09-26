#路由的实现
1. 存储hash与回调函数的对应关系，以key，value的形式存在对象cache中
2. 设置监听函数onhashchange, 监听url中的hash的变化
3. 一旦hash变化，则遍历cache对象，将属性key做正则处理,生成对应的正则,再将其拿去和hash做正则匹配,匹配到后执行相应的value/回调函数
4. 回调函数中执行渲染ui的代码，进行页面更新