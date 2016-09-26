
=========================ubuntu系统=================================

#购买一台阿里云ECS服务器
1. https://www.aliyun.com
2. https://ecs.console.aliyun.com

#安装ubuntu系统
##更新安装源
1. apt-get update

#SSH连接到服务器
1. xshell 新建连接
2. ssh root@123.57.143.189

#安装node
##https://nodejs.org/en/download/package-manager
1. apt-get install -y curl
2. curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
3. apt-get install nodejs

#安装mysql
1. apt-get install mysql-server
2. apt-get install mysql-client
3. apt-get install libmysqlclient-dev

#下载github代码

#安装pm2
1. 强大的进程管理器，进程异常退出时pm2会尝试重启
2. npm install pm2 -g

#用pm2启动node
##命令
1. pm2 start app.js --name "crawl"	启动应用
2. pm2 list	查看所有应用
3. pm2 restart crawl	重启应用
4. pm2 stop crawl	停止应用
5. pm2 delete crawl	删除应用

#安装nginx
##Nginx是一个高性能的HTTP和反向代理服务器
1. apt-get install nginx


#nginx命令
1. 启动nginx nginx -c /etc/nginx/nginx.conf
2. 关闭 nginx nginx -s stop
3. 重读配置文件nginx -s reload kill -HUP nginx
4. 常用命令service nginx {start|stop|status|restart|reload|configtest|}

#配置nginx反向代理和负载均衡
```
upstream crawl{
    ip_hash;
    server 127.0.0.1:3000 weight=10;
    server 127.0.0.1:4000 weight=1;
}

server {
        listen 80;
        server_name www.zfpx.com;

        location / {
           proxy_pass http://crawl;
        }
}
```

======================centos系统=======================

#购买一台阿里云ECS服务器
1. https://www.aliyun.com
2. https://ecs.console.aliyun.com

#SSH连接到服务器
1. xshell 新建连接
2. ssh root@123.57.143.189

#安装ubuntu系统
##更新安装源
1. yum update

#安装node
1. wget https://nodejs.org/dist/v4.5.0/node-v4.5.0.tar.gz
2. tar -zxvf node-v4.5.0.tar.gz
3. ./configure(执行这一步一般会提示gcc和g++版本过低，这个时候安装ps部分执行就可以了)

```
遇到gcc和g++版本过低问题的时候解决办法
解决步骤:
1. cd /etc/yum.repos.d
2. wget http://linuxsoft.cern.ch/cern/scl/slc6-scl.repo
3. yum -y --nogpgcheck install devtoolset-3-gcc devtoolset-3-gcc-c++
4. scl enable devtoolset-3 bash
```

4. make
5. sudo make install

#安装pm2
1. 强大的进程管理器，进程异常退出时pm2会尝试重启
2. npm install pm2 -g


#用pm2启动node
##命令
1. pm2 start app.js --name "crawl"	启动应用
2. pm2 list	查看所有应用
3. pm2 restart crawl	重启应用
4. pm2 stop crawl	停止应用
5. pm2 delete crawl	删除应用


#nginx命令
1. 启动nginx nginx -c /etc/nginx/nginx.conf
2. 关闭 nginx nginx -s stop
3. 重读配置文件nginx -s reload kill -HUP nginx
4. 常用命令service nginx {start|stop|status|restart|reload|configtest|}

#配置nginx反向代理和负载均衡
```
upstream crawl{
    ip_hash;
    server 127.0.0.1:3000 weight=10;
    server 127.0.0.1:4000 weight=1;
}

server {
        listen 80;
        server_name www.zfpx.com;

        location / {
           proxy_pass http://crawl;
        }
}
```

准备工作
1. yum update
2. wget https://nodejs.org/dist/v4.5.0/node-v4.5.0.tar.gz
3. tar -zxvf node-v4.5.0.tar.gz
4. ./configure(执行这一步一般会提示gcc和g++版本过低，这个时候安装ps部分执行就可以了)
5. make
6. sudo make install

ps: 过程中可能会提示: WARNING: C++ compiler too old, need g++ 4.8 or clang++ 3.4 (CXX=g++)

解决步骤:
1. cd /etc/yum.repos.d
2. wget http://linuxsoft.cern.ch/cern/scl/slc6-scl.repo
3. yum -y --nogpgcheck install devtoolset-3-gcc devtoolset-3-gcc-c++
4. scl enable devtoolset-3 bash
























