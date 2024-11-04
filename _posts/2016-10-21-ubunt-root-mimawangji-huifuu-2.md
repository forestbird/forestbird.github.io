---
id: 438
title: 'Ubunt root 密码忘记-恢复u'
date: '2016-10-21T00:39:51+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=438'
permalink: /2016/10/21/ubunt-root-mimawangji-huifuu-2/
categories:
    - log
tags:
    - root
    - Ubunt
---

方法一：

 如果用户具有sudo权限，那么直接可以运行如下命令：

 #sudo su root

 #passwd

 #更改密码

 或者直接运行sudo passwd root命令就可以直接更改root密码。

 有关sudo su的区别：

 1.共同点：都是root用户的权限；  
 2.不同点：su仅仅取得root权限，工作环境不变，还是在切换之前用户的工作环境；sudo是完全取得root的权限和root的工作环境。

 参考：<http://www.cnblogs.com/ljf181275034/archive/2011/09/14/2176704.html>

http://blog.chinaunix.net/uid-26853826-id-3190753.html

---

<span class="con">ubuntu下，运行时出现了root access is required for the operations you have chosen </span>

<span class="con">先# su  
然后输入密码  
然后安装  
你的权限不够。</span>