---
id: 456
title: zblog如何删除获取该日志的Trackback引用地址呢？
date: '2017-05-02T02:34:22+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=456'
permalink: /2017/05/02/zblogruheshanchuhuoqugairizhidetrackbackyinyongdizhine-2/
categories:
    - log
tags:
    - Trackback
    - z-blog
    - 删除
    - 引用地址
---

 <span style="color: rgb(34, 34, 34); font-family: Tahoma, Geneva, sans-serif; font-size: 14px; line-height: 28px; background-color: rgb(253, 253, 253);">大家在文章底部会看到“该日志的Trackback引用地址”这么一句话，有的朋友不想要，想把它去掉，怎么做呢？</span>  
<span style="color: rgb(34, 34, 34); font-family: Tahoma, Geneva, sans-serif; font-size: 14px; line-height: 28px; background-color: rgb(253, 253, 253);">方法：</span>  
<span style="color: rgb(34, 34, 34); font-family: Tahoma, Geneva, sans-serif; font-size: 14px; line-height: 28px; background-color: rgb(253, 253, 253);">先打开b\_article-single.html文件，然后删除以下代码就可以了。</span>  
<span style="color: rgb(34, 34, 34); font-family: Tahoma, Geneva, sans-serif; font-size: 14px; line-height: 28px; background-color: rgb(253, 253, 253);">&lt;a href="&lt;#article/pretrackback\_url#&gt;" target="\_blank"&gt;&lt;#ZC\_MSG232#&gt;</span>  
  
<span style="color: rgb(34, 34, 34); font-family: Tahoma, Geneva, sans-serif; font-size: 14px; line-height: 28px; background-color: rgb(253, 253, 253);">很简单。:)</span>