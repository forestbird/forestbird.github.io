---
id: 369
title: 'SEO优化 Typecho开启Gzip压缩加速网站'
date: '2021-02-03T05:20:00+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=369'
permalink: /2021/02/03/beicanrensheng-2/
categories:
    - log
tags:
    - Gzip
    - SEO
    - typecho
    - 悲惨人生
    - 退休
---

#### Gzip简介

GZip压缩，是一种网站速度优化技术，也是一把SEO优化利器，许多网站都采用了这种技术，以达到提升网页打开速度、缩短网页打开时间的目的。

网站采用Gzip压缩，还有一个好处，就是让你少了一份流量超标的担心。因为Gzip开启以后会将输出到用户浏览器的数据进行压缩的处理，这样就会减小通过网络传输的数据量，而这个，也正是提升网页打开时间的原因所在。

#### 开启方法

打开typecho目录下的 index.php，并在开头添加 ob\_start(‘ob\_gzhandler’); 即可。

```
/** 开启giz压缩 */
ob_start('ob_gzhandler');

```

![111r32e.jpg](http://go123.top/usr/uploads/2021/03/347732127.jpg "111r32e.jpg")

- 最后

添加后到站长工具<https://mtool.chinaz.com/Tool/GzipCheck/> 查询一下就知道是否成功开启了

---

悲惨人生

![弗兰宝儿的悲惨之旅](https://bird.work/usr/uploads/2021/02/84109486.jpg "弗兰宝儿的悲惨之旅")

# 关于退休时间

1. 40岁
2. 45岁
3. 50岁
4. 55岁
5. 60岁
6. 65岁

有了这么多档位，而且男女也不是相同。我算了我跟单位女同事姐姐相差3岁，我竟然在**她退休后**的**19年之后才能退休**（含延时退休）。真是尴尬的80后。

本博的工龄已经是19年了。2042年我60岁，退休我的工龄就是40年了。这一辈子……CAO

关于企业单位值宿也是没有明文法律规定（而且只有男员工才值宿），每一年要在单位守12个夜晚，而且次日正常工作。