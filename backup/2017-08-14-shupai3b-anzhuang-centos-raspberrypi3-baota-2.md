---
id: 470
title: '树莓派3b 安装 CentOS RaspberryPi3 宝塔'
date: '2017-08-14T14:09:36+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=470'
permalink: /2017/08/14/shupai3b-anzhuang-centos-raspberrypi3-baota-2/
categories:
    - log
tags:
    - centos
    - RaspberryPi3
    - 安装
    - 宝塔
    - 树莓派3b
---

 目录

1.网络设置

2.硬件购买

3.写入系统

4.开始搭建nginx服务器

1.网络设置

 1.1. 申请公网ip

 不多讲，向运营商进行申请（可以向宽带维修人员求助 小人曾经申请是免费的，现在不知道了）

 如何判断是否是公网ip

 在baidu中输入ip进行搜索，然后去ping一下自己的ip，如果能够ping通，一般就是公网ip，否则就是私网ip

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213434325.png)

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213436284.png)

 可见，能够ping通，证明我的就是公网ip，但是美中不足的就是，这个ip是随机分配的，当重启光猫后，则又会重新获取了，这就需要一种新的机制了，那就是花生壳

 1.2 使用花生壳进行域名绑定

 参照网址:<span style="font-family: Calibri, serif;"><span lang="en-US">upload/201708132213435173.png" alt="" width="884" height="443" style="border: 0px; max-width: 900px;" /&gt;</span></span>

<span style="font-family: Calibri, serif;"><span lang="en-US"> 进行绑定了之后，可以试试通过ping 域名的方式来检查绑定成功了没有，我的成功了</span></span>

<span style="font-family: Calibri, serif;"><span lang="en-US"> 路由器的部分，先到这里，下面来看看树莓派的部分</span></span>

<span style="font-family: Calibri, serif;"><span lang="en-US">2.硬件购买</span></span>

<span style="font-family: Calibri, serif;"><span lang="en-US"> </span></span>

| <span style="font-family: 宋体;">购买价格如下</span> |
|---|
| <span style="font-family: 宋体;">**名称**</span> | <span style="font-family: 宋体;">**型号规格**</span> | <span style="font-f amily: 宋体;">**价格**</span> |
| <span style="font-family: 宋体;">主机</span> | <span style="font-family: 宋体;">树莓派</span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">3</span></span></span><span style="font-family: 宋体;">代</span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">B Raspberry Pi Model 3 B </span></span></span><span style="font-family: 宋体;">板载</span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">wifi</span></span></span><span style="font-family: 宋体;">蓝牙 </span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">E14</span></span></span><span style="font-family: 宋体;">主板</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥190.00</span></span></span> |
| <span style="font-family: 宋体;">读卡器</span> | <span style="font-family: 宋体;">随机</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥9.90</span></span></span> |
| <span style="font-family: 宋体;">机壳</span> | <span style="font-family: 宋体;">随机</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥12.00</span></span></span> |
| <span style="font-family: 宋体;">散热片</span> | <span style="font-family: 宋体;">树梅派</span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">2</span></span></span><span style="font-family: 宋体;">代</span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">/3</span></span></span><span style="font-family: 宋体;">代专用</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥3.50</span></span></span> |
| <span style="font-family: Calibri, serif;"><span lang="en-US">HTML</span></span><span style="font-family: 宋体;">转</span><span style="font-family: Calibri, serif;"><span lang="en-US">VGA</span></span><span style="font-family: 宋体;">线</span> | <span style="font-family: 宋体;">随机</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥15.50</span></span></span> |
| <span style="font-family: 宋体;">电源线</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">5V 2.5A Micro USB </span></span></span><span style="font-family: 宋体;">电源带开关线 </span><span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">raspberry pi 3</span></span></span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">¥17.90</span>n&gt;</span></span> |
| <span style="font-family: 宋体;">**总计**</span> | <span style="font-family: Calibri, serif;"><span lang="en-US"><span style="font-family: 宋体, serif;">**¥248.80**</span></span></span> |

 加上邮费的话，一共话费进行250左右，内存卡是我自己原有的

 淘宝很多，这里就不介绍了

3.写入系统

<span style="font-family: Calibri, serif;"><span lang="en-US"> 3.1.</span></span>必备工具

 这里我们下载的是<span style="font-family: Calibri, serif;"><span lang="en-US">CentOS-arm.img</span></span>这个系统，并且使用<span style="font-family: Calibri, serif;"><span lang="en-US">win32diskimager</span></span>来写入内存卡

 必备工具：

 读卡器

 内存卡（至少<span style="font-family: Calibri, serif;"><span lang="en-US">4G </span></span>推荐使用<span style="font-family: Calibri, serif;"><span lang="en-US">8G </span></span>在下使用的是<span style="font-family: Calibri, serif;"><span lang="en-US">16G</span></span>）

 一台<span style="font-family: Calibri, serif;"><span lang="en-US">windows</span></span>的电脑

 3.2 下载系统

 废话不多说，这里提供几个网址给大家

 教程：

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213432611.png)

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213432042.png)

 写入<span style="font-family: Calibri, serif;"><span lang="en-US">ok </span></span>开始连接各个硬件(其实就只有电源线和网线需要连接以及插入内存卡)

4.开始搭建nginx服务器

 4.1 获取树莓派ip地址

 可以看到centos-rpi3这个的Ip地址，也就是树莓派的地址

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213436666.png)

 4.2 设置路由转发

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213447058.png)

 同时，也要开启DMZ设置

 ![](http://www.zhaoweifeng.cn/blog/upload/201708132213444232.png)

 4.3 安装nginx程序

 开始连接树莓派

 命令:ssh username@host -p port

 连接成功后，属于一下命令来获取nginx

```
#获取nginx程序<br></br>[root@centos-rpi3 ~]# <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">wget</span> http:<span style="color: rgb(0, 128, 0); line-height: 1.5 !important;">//</span><span style="color: rgb(0, 128, 0); line-height: 1.5 !important;">nginx.org/download/nginx-1.2.9.tar.gz<br></br></span>
```

```
<span style="line-height: 1.5 !important;">#解压nginx程序 [root@centos</span>-rpi3 ~]# <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">tar</span> xf nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>.<span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">tar</span>.gz
```

```
#利用yum 安装pcre pcre-devel openssl openssl-devel gcc包<br></br>[root@centos-rpi3 ~]# <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">yum</span> <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">install</span> pcre pcre-devel openssl openssl-devel <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">gcc</span> -y
```

```
#开始安装<br></br>[root@centos-rpi3 ~]# cd nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9<br></br></span>[root@centos-rpi3 nginx-1.2.9]# ./configure --user=nginx --group=nginx --prefix=/usr/local/nginx-1.2.9 --with-http_ssl_module --with-http_stub_status_module<br></br>[root@centos-rpi3 nginx-1.2.9]# make<br></br>[root@centos-rpi3 nginx-1.2.9]# make install
```

 4.4 配置

设置配置如下:  
配置路径

 \[root@centos-rpi3 conf\]# pwd  
/usr/local/nginx-1.2.9/conf  
\[root@centos-rpi3 conf\]#

```
[root@centos-rpi3 conf]# <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">sed</span> -n <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">30</span><span style="line-height: 1.5 !important;">,40p nginx.conf     #keepalive_timeout  </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0</span><span style="line-height: 1.5 !important;">;     keepalive_timeout  </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">65</span><span style="line-height: 1.5 !important;">;      #</span><span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">gzip</span><span style="line-height: 1.5 !important;">  on;      server {         listen       </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1234</span><span style="line-height: 1.5 !important;">;<br></br>#hai-yan.ticp.net是我的域名         server_name  hai</span>-<span style="line-height: 1.5 !important;">yan.ticp.net;          #charset koi8</span>-<span style="line-height: 1.5 !important;">r;  [root@centos</span>-rpi3 conf]# 
```

 4.5 实验

```
检查语法<br></br>[root@centos-rpi3 conf]# /usr/local/nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>/sbin/nginx -<span style="line-height: 1.5 !important;">t nginx: the configuration </span><span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">file</span> /usr/local/nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>/conf/<span style="line-height: 1.5 !important;">nginx.conf syntax is ok nginx: configuration </span><span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">file</span> /usr/local/nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>/conf/<span style="line-height: 1.5 !important;">nginx.conf test is successful<br></br>启动nginx [root@centos</span>-rpi3 conf]# /usr/local/nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>/sbin/<span style="line-height: 1.5 !important;">nginx [root@centos</span>-rpi3 conf]# 
```

```
查看nginx是否启动<br></br>[root@centos-rpi3 conf]# <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">ps</span> aux | <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">grep</span><span style="line-height: 1.5 !important;"> nginx root      </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">5792</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.0</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.2</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">7820</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1912</span> ?        Ss   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;
">05</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">07</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">00</span> nginx: master process /usr/local/nginx-<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span>/sbin/<span style="line-height: 1.5 !important;">nginx nginx     </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">5793</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.0</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.2</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">7976</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2464</span> ?        S    <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">05</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">07</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">00</span><span style="line-height: 1.5 !important;"> nginx: worker process root      </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">5795</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.0</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0.2</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">6400</span>  <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2264</span> pts/<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0</span>    S+   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">05</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">08</span>   <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">0</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">00</span> <span style="color: rgb(0, 0, 255); line-height: 1.5 !important;">grep</span> --color=<span style="line-height: 1.5 !important;">auto nginx [root@centos</span>-rpi3 conf]# 
```

```
关闭防火墙<br></br>[root@centos-<span style="line-height: 1.5 !important;">rpi3 conf]# systemctl stop firewalld.service [root@centos</span>-rpi3 conf]# 
```

```
本机测试<br></br>[root@centos-rpi3 conf]# curl -I hai-yan.ticp.net:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1234</span><span style="line-height: 1.5 !important;"> HTTP</span>/<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.1</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">200</span><span style="line-height: 1.5 !important;"> OK Server: HaiYan</span>/<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span><span style="line-height: 1.5 !important;"> Date: Wed, </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">29</span> Mar <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2017</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">05</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">11</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">55</span><span style="line-height: 1.5 !important;"> GMT Content</span>-Type: text/<span style="line-height: 1.5 !important;">html Content</span>-Length: <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">560</span><span style="line-height: 1.5 !important;"> Last</span>-Modified: Wed, <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">29</span> Mar <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2017</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">02</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">22</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">34</span><span style="line-height: 1.5 !important;"> GMT Connection: keep</span>-<span style="line-height: 1.5 !important;">alive Accept</span>-<span style="line-height: 1.5 !important;">Ranges: bytes  [root@centos</span>-rpi3 conf]#
```

```
yan@yan:~$ curl -I hai-yan.ticp.net:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1234</span><span style="line-height: 1.5 !important;"> HTTP</span>/<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.1</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">200</span><span style="line-height: 1.5 !important;"> OK Server: HaiYan</span>/<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">1.2</span>.<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">9</span><span style="line-height: 1.5 !important;"> Date: Wed, </span><span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">29</span> Mar <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2017</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">05</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">12</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">28</span><span style="line-height: 1.5 !important;"> GMT Content</span>-Type: text/<span style="line-height: 1.5 !important;">html Content</span>-Length: <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">560</span><span style="line-height: 1.5 !important;"> Last</span>-Modified: Wed, <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">29</span> Mar <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">2017</span> <span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">02</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">22</span>:<span style="color: rgb(128, 0, 128); line-height: 1.5 !important;">34</span><span style="line-height: 1.5 !important;"> GMT Connection: keep</span>-<span style="line-height: 1.5 !important;">alive Accept</span>-<span style="line-height: 1.5 !important;">Ranges: bytes  yan@yan:</span>~$ 
```

接下来只需要修改html文件，写入自己想要写入的内容即可

5.总结

我就只总结我在实验工程中出现的问题:

 1.域名转发不成功

 解决:求助运营商将自动获取ip修改为PPPOE拨号，然后在路由进行设置转发即可

 2.本机电脑ping不通wan口ip(就是百度Ip的那个结果)

 解决:向运营商证实自家网络是公网ip，用路由检测工具检测根DNS是否正常，如果不正常，则换一个路由即可(我就是换了一个路由)

 3.在本地能够正确浏览网页(curl -I ipaddress)，但是用其他机器访问网址时出现无法找到

 解决:关闭防火墙和selinux，或者开放需要的端口

总结:

 最主要的就是设置路由转发，如果在外网能够连接到服务器，那么一切都好说，其他的只是时间问题，总结一下最基本搭建服务器的步骤:

 1.购买硬件

 2.设置网络为公网ip

 3.设置路由转发 —&gt; 转发至局域网服务器上

 4.检测，ping即可

 5.安装软件

 6.布置网页

最后:show一下配置完成的网页

 网址:http://hai-yan.ticp.net:1234

树莓派3b用啥系统安装宝塔面板好？https://www.bt.cn/bbs/thread-5062-1-1.html

Centos安装脚本：

yum install -y wget &amp;&amp; wget -O install.sh http://download.bt.cn/install/install.sh &amp;&amp; sh install.sh

https://www.bt.cn/bbs/thread-1186-1-1.html

mysql 5.6 php 7.1 nginx 1.12