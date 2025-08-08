---
id: 367
title: Blblog
date: '2016-05-10T11:48:00+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=367'
permalink: /2016/05/10/hello-world-2/
categories:
    - log
tags:
    - .md
    - Apache2
    - Blblog
    - hexo
    - markdown
    - Medium
    - Nginx
    - 'PHP 7.0'
    - Telegra.ph
---

> Blblog 是一个仅使用 Markdown 文件的极简博客。它受到Telegra.ph、Medium或Hexo  
> 的强烈启发。该项目是为个人使用而创建的，但欢迎您将这个项目做得更好！  
> ![首页示例](https://s3.bmp.ovh/imgs/2021/08/a4f81e2c12e495b9.jpg "首页示例")  
> ![文章页演示](https://s3.bmp.ovh/imgs/2021/08/92f13ded10a25a9d.jpg "文章页演示")

如何安装？  
只需 git clone <https://github.com/Donokami/Blblog.md.git> .在/var/www/html/（或任何网络服务器根目录）中使用或在此处下载存档并解压缩到您的网络服务器根目录中。

在 Apache2 上  
您需要使用sudo a2enmod rewrite. 如果 url 重写不起作用，这可能是由于您的 Apache2 配置；要纠正此问题，请apache2.conf在/etc/apache2（在基于 linux 的发行版上）编辑您的文件并将任何文件替换AllowOverride None为AllowOverride All.

在 Nginx 上  
替换/etc/nginx/sites-available/default成这个配置，然后使用重启Nginx

nginx -t  
nginx -s reload  
配置  
你必须./include/Config.php根据你自己的网络服务器和你未来博客的数据来配置文件（阅读评论以获得更多帮助）。另外，用你自己的资产替换./assets/img/static/bg.jpg&amp;./assets/img/meta/cover.jpg

如何写一篇文章？  
在文章文件夹中创建一个新文件，如wow.md. .md 非常重要，如果扩展名不在这里，您的文件将不会被读取。现在，在您的文件中，您需要编写一个标题，如下所示：

title: Hey, Read me !  
desc: Here is the description of the article, where you can write some informations.  
author: Kiyoshi  
cover: assets/img/articles/readme\_cover.png //(Optional) It can be either a file or an url.

## tags: configuration blblog markdown php //(Optional)

*Here is the content of \_your article*

![PHP代码目录](https://s3.bmp.ovh/imgs/2021/08/da7fca7fde5f6d12.jpg "PHP代码目录")  
![只需本地生成.md文件就可以更新BLOG文章](https://s3.bmp.ovh/imgs/2021/08/7f93fed1cc9f5bc4.jpg "只需本地生成.md文件就可以更新BLOG文章")  
![.md Markdown文件里的代码写法](https://s3.bmp.ovh/imgs/2021/08/5507fc1b20e40a7d.jpg ".md Markdown文件里的代码写法")

这就是全部！

扩展想法：可以采集文文章，然后批量生成.md文件，上传后批量更新文章。实现某些目地。