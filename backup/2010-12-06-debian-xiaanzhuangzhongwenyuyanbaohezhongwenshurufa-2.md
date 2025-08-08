---
id: 432
title: 'Debian 下安装中文语言包和中文输入法'
date: '2010-12-06T20:32:14+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=432'
permalink: /2010/12/06/debian-xiaanzhuangzhongwenyuyanbaohezhongwenshurufa-2/
categories:
    - log
tags:
    - debian
    - 中文
    - 乱码
    - 修复
    - 语言包设置
    - 输入法
---

1\. Setup locales

dpkg-reconfigure locales

选择

zh\_CN GB2312

zh\_CN.GBK GBK

zh\_CN.UTF-8 UTF-8

默认locale还是选en\_US.UF8

2\. Install font

apt-get install ttf-arphic-uming xfonts-intl-chinese xfonts-wqy

3\. 安装debian中文输入法

apt-get install scim scim-chinese scim-pinyin