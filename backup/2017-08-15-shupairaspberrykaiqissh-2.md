---
id: 473
title: 树莓派Raspberry开启ssh
date: '2017-08-15T13:24:29+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=473'
permalink: /2017/08/15/shupairaspberrykaiqissh-2/
categories:
    - log
tags:
    - Raspberry
    - ssh
    - 开启
    - 树莓派
---

 <span style="color: rgb(85, 85, 85); font-family: "microsoft yahei"; font-size: 15px;">旧版的树莓派</span><span style="color: rgb(51, 51, 51); font-family: arial; font-size: 13px;">Raspberry系统默认开启ssh功能； 新版默认是关闭ssh的；对于没有屏幕的我来说就是一个晴天霹雳啊!!!!</span>

<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 13px;">  
</span>

<span style="font-family: arial; color: rgb(51, 51, 51);"><span style="font-size: 13px;">后来查找资料, 只需要在boot下(SD卡根目录)载创建一个ssh文件即可(只是单纯的文件,用于标识启动ssh); 系统启动后会自动开启ssh服务</span></span>

user: pi

password: raspberry