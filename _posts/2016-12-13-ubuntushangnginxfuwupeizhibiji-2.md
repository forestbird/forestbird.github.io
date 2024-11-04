---
id: 451
title: Ubuntu上Nginx服务配置笔记
date: '2016-12-13T10:55:56+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=451'
permalink: /2016/12/13/ubuntushangnginxfuwupeizhibiji-2/
categories:
    - log
tags:
    - install
    - Nginx
    - restart
    - ubuntu
---

\#安装nginx

> sudo apt-get install nginx

\# 测试nginx安装成功，假设IP为 8.8.8.8

\# 浏览器访问 http://8.8.8.8 确认看到 Welcom to nginx!

Nginx配置

/etc/nginx/conf.d/default.conf

> server {
> 
>  listen 80 default\_server;
> 
>  listen \[::\]:80 default\_server ipv6only=on;
> 
>  # 如果要支持HTTPS，修改这里
> 
>  # 可以使用 https://letsencrypt.org 的免费SSL证书
> 
>  #listen 443 ssl;
> 
>  #ssl\_certificate www.example.com.crt;
> 
>  #ssl\_certificate\_key www.example.com.key;
> 
>  #ssl\_protocols TLSv1 TLSv1.1 TLSv1.2;
> 
>  #ssl\_ciphers HIGH:!aNULL:!MD5;
> 
>  # 重定向所有HTTP到HTTPS
> 
> <span class="Apple-tab-span" style="white-space:pre"> </span>\# rewrite ^(.\*)$ https://$host$1 permanent;
> 
> <span class="Apple-tab-span" style="white-space:pre"> </span>\# 网站根目录，根据需要修改
> 
>  root /usr/share/nginx/html;
> 
>  # 增加index.php
> 
>  index index.php index.html index.htm;
> 
> <span class="Apple-tab-span" style="white-space:pre"> </span>\# 假设域名是 ssl.mcxiaoke.com
> 
>  server\_name ssl.mcxiaoke.com; #绑定域名
> 
>  location / {
> 
>  try\_files $uri $uri/ =404;
> 
>  }
> 
>  error\_page 404 /404.html;
> 
>  error\_page 500 502 503 504 /50x.html;
> 
>  location = /50x.html {
> 
>  root /usr/share/nginx/html;
> 
>  }
> 
> <span class="Apple-tab-span" style="white-space:pre"> </span>\#支持php-fpm的配置
> 
>  location ~ \\.php$ {
> 
>  try\_files $uri =404;
> 
>  fastcgi\_split\_path\_info ^(.+\\.php)(/.+)$;
> 
>  fastcgi\_pass unix:/var/run/php5-fpm.sock;
> 
>  fastcgi\_index index.php;
> 
>  fastcgi\_param SCRIPT\_FILENAME $document\_root$fastcgi\_script\_name;
> 
>  include fastcgi\_params;
> 
>  }
> 
> }

配置完成后，测试一下

\# 重启nginx服务

> sudo service nginx restart