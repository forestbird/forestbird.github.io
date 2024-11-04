---
id: 466
title: VestaCP面板安装与卸载
date: '2017-07-27T09:32:09+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=466'
permalink: /2017/07/27/vestacpmianbananzhuangyuxiezai-2/
categories:
    - log
tags:
    - vestacp
---

<header class="entry-header" style="box-sizing: inherit; border: 0px; font-family: 'Microsoft YaHei', Helvetica, Arial, 'Lucida Grande', Tahoma, sans-serif; font-size: 14px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; color: rgb(68, 68, 68); line-height: 25.2px;"># VestaCP面板安装与卸载

</header><div class="entry-content" style="box-sizing: inherit; border: 0px; font-family: 'Microsoft YaHei', Helvetica, Arial, 'Lucida Grande', Tahoma, sans-serif; font-size: 14px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; color: rgb(68, 68, 68); line-height: 25.2px;"><div class="single-content" style="box-sizing: inherit; border: 0px; font-family: inherit; font-size: 1.5rem; font-style: inherit; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; line-height: 1.8;">VestaCP是一款强大的[![VestaCP面板安装与卸载](http://www.zhaoweifeng.cn/blog/upload/201707261732388183.png)](http://www.zhaoweifeng.cn/blog/upload/201707261732378787.png)  
通过浏览器登录VestaCP，你会发现默认是英文的，点击右上角的admin就可以修改了。  
[![VestaCP面板安装与卸载](http://www.zhaoweifeng.cn/blog/upload/201707261732395427.png)](http://www.zhaoweifeng.cn/blog/upload/201707261732395427.png)  
VestaCP支持Centos,Ubuntu,Debian,RHEL,为了顺利安装，推荐使用纯净系统。如果安装失败，可使用强制安装

`bash vst-install.sh --force`

安装VestaCP内存小于1G的为Mirco型，1G-3G的为 Mini型 ，3G-7G为 Medium型，7G以上为Large型，其中只有Medium和Large型才安装 防病毒垃圾组件，Micro型没有phpfcgi的支持。

———————————————————————————————————————–

卸载VESTACP

1\. 停止VESTA服务

`service vesta stop`

2\. 删除VESTA的安装程序

CentOS:  
`yum remove vesta*`

`rm -f /etc/yum.repos.d/vesta.repo`

Debian/Ubuntu:  
`apt-get remove vesta*`

`rm -f /etc/apt/sources.list.d/vesta.list`

3\. 删除数据目录和计划任务

`rm -rf /usr/local/vesta`

此外最好删除admin用户和相关计划任务

</div></div>