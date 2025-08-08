---
id: 458
title: nginx搭建简单的文件目录服务器
date: '2017-06-28T07:01:29+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=458'
permalink: /2017/06/28/nginxdajianjiandandewenjianmulufuwuqi-2/
categories:
    - log
tags:
    - Nginx
    - 目录服务器
---

直接yum安装即可

yum install nginx -y  
配置文件位于：/etc/nginx/nginx.conf，里面可以修改处理器数量、日志路径、pid文件路径等，默认的日志：

错误日志 /var/log/nginx/error.log  
访问日志 /var/log/nginx/access.log  
在nginx.conf末尾有一句：include /etc/nginx/conf.d/\*.conf; 推荐把用户自己的配置放到conf.d/

下面把默认的server修改为一个简单的文件服务器，vi /etc/nginx/conf.d/default.conf，修改监听端口listen和文件目录root

server {  
listen 80;  
server\_name cloud.mrlong.cc; # 自己PC的ip或者服务器的域名  
charset utf-8; # 避免中文乱码  
root /usr/share/nginx/; # 存放文件的目录  
location / {  
autoindex on; # 索引  
autoindex\_exact\_size on; # 显示文件大小  
autoindex\_localtime on; # 显示文件时间  
}  
}

启动nginx

/etc/init.d/nginx restart

<span style="color: rgb(69, 69, 69); font-family: Verdana, 'Microsoft YaHei'; font-size: 16px; line-height: 30px;">浏览器访问，http://ip+域名，可以看到默认目录下的文件，点击可下载：</span>![nginx搭建简单的文件目录服务器 - 第1张  | Mr.Long](http://www.zhaoweifeng.cn/blog/upload/201706271502011303.png "nginx搭建简单的文件目录服务器 - 第1张  | Mr.Long")<span style="color: rgb(69, 69, 69); font-family: Verdana, 'Microsoft YaHei'; font-size: 16px; line-height: 30px;"> </span>[![nginx搭建简单的文件目录服务器 - 第2张  | Mr.Long](http://www.zhaoweifeng.cn/blog/upload/201706271502042037.png "nginx搭建简单的文件目录服务器 - 第2张  | Mr.Long")](http://www.zhaoweifeng.cn/blog/upload/201706271502042037.png)

另，修改了nginx配置后可以在不影响使用的情况下重载

/etc/init.d/nginx reload

如果碰到  
Error: Cannot retrieve metalink for repository: epel. Please verify its path and try again

我们这么操作：  
\# sudo sed -i “s/mirrorlist=https/mirrorlist=http/” /etc/yum.repos.d/epel.repo

\# yum update