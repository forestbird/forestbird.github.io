---
id: 450
title: ubuntu彻底删除nginx
date: '2016-12-13T10:17:30+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=450'
permalink: /2016/12/13/ubuntuchedishanchunginx-2/
categories:
    - log
tags:
    - Nginx
    - remove
    - ubuntu
---

- 先执行一下命令：

> sudo apt-get –purge remove nginx
> 
> sudo apt-get autoremove
> 
> dpkg –get -selections|grep nginx

罗列出与nginx相关的软件， nginx-common deinstall 然后

> sudo apt-get –purge remove nginx-common

这样就可以完全卸载掉nginx包括配置文件

- ps -ef |grep nginx 看下nginx还有没有启动,一般执行完1后，nginx还是启动着的，如下：

> ps -ef |grep nginx

root 4061 2418 0 Mar11 ? 00:00:00 nginx: master process sbin/nginx

nobody 4062 4061 0 Mar11 ? 00:00:00 nginx: worker process

bkxmgx 15487 4229 0 01:13 pts/0 00:00:00 grep –color=auto nginx

- kill nginx进程

> sudo kill -9 4061 4062

- 

> sudo find / -name nginx\*

/usr/local/src/nginx-1.7.9

/usr/local/src/nginx-1.7.9

/objs/src/core/nginx.o

/usr/local/src/nginx-1.7.9/objs/nginx.8

/usr/local/src/nginx-1.7.9/objs/nginx

/usr/local/src/nginx-1.7.9/src/http/modules/perl/nginx.xs

/usr/local/src/nginx-1.7.9/src/http/modules/perl/nginx.pm

/usr/local/src/nginx-1.7.9/src/core/nginx.c

/usr/local/src/nginx-1.7.9/src/core/nginx.h

/usr/local/src/nginx-1.7.9/man/nginx.8

/usr/local/src/nginx-1.7.9/conf/nginx.conf

/usr/local/src/nginx-1.7.9/contrib/vim/syntax/nginx.vim

/usr/local/src/nginx-1.7.9/contrib/vim/ftdetect/nginx.vim

/usr/local/src/nginx-1.7.9/contrib/vim/indent/nginx.vim

/usr/local/nginx /usr/local/nginx/logs/nginx.pid

/usr/local/nginx/conf/nginx.conf.default

/usr/local/nginx/conf/nginx.conf

/usr/local/nginx/sbin/nginx /home/bkxmgx/nginx.conf