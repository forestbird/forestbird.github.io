---
id: 482
title: 树莓派开启SSH的N种方法
date: '2020-06-02T15:40:07+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=482'
permalink: /2020/06/02/shupaikaiqisshdenzhongfangfa-2/
categories:
    - log
tags:
    - pi
    - ssh
    - 开启
    - 树莓派
---

<div style="box-sizing: border-box; color: rgb(64, 64, 64); font-family: -apple-system,BlinkMacSystemFont,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Segoe UI&quot;,&quot;PingFang SC&quot;,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;"><div style="box-sizing: border-box;"># **问题：为什么我的树莓派无法使用远程连接电脑？**

# **解答：**

由于树莓派只有一个串口，当我们开发中需要占用这个串口或者我们希望进行远程开发（通过一个根网线或无线连接到树莓派）。SSH连接，首先需要确认的是：

1.你的树莓派有没有连接到网络；（不确定请百度：树莓派Raspberry Pi 设置无线上网）

2.使用软件时，填写的ip、用户名和密码是否正确；(不确定请百度：获取树莓派ip地址方法)

3.有没有开启SSH。

科普一下，自己烧录官方系统的小伙伴们注意了，官网的系统默认是不开启SSH的英文版本，而我们售出的SD卡都是开启了SSH的中文版本。本教程针对不懂如何开启SSH的学习者。当然SSH客户端很多，比如：putty、xshell、手机端的juiceSSH等，这里以PuTTY为例：

# **详细方法：  


#### **方法一：**

在命令行输入：sudo /etc/init.d/ssh start，然后回车，如下图1.1：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 48px; max-width: 627px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 7.66%;"> </div><div class="image-view" data-height="48" data-width="627" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344488788.png?imageMogr2/auto-orient/strip|imageView2/2/w/627)</div></div><div class="image-caption" style="box-sizing: border-box;">图1.1</div></div>注：方法一是临时的（重启后需要重新开启），后面的所有方法都是永久开启

#### **方法二：**

将SD卡连接到电脑上并打开，直接新建“SSH”文件（无后缀）即可，如下图2.1：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 286px; max-width: 359px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 79.67%;"> </div><div class="image-view" data-height="286" data-width="359" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344508652.png?imageMogr2/auto-orient/strip|imageView2/2/w/359)</div></div><div class="image-caption" style="box-sizing: border-box;">图2.1</div></div>#### **方法三：**

1.如下图3.1，依次打开 菜单(Menu) &gt; 首选项(Preferences) &gt; Raspberry Pi Configuration：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 290px; max-width: 525px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 55.24%;"> </div><div class="image-view" data-height="290" data-width="525" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344500448.png?imageMogr2/auto-orient/strip|imageView2/2/w/525)</div></div><div class="image-caption" style="box-sizing: border-box;">图3.1</div></div>2.点击 Interfaces 栏，选择“enable” SSH服务。如下图3.2：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 411px; max-width: 482px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 85.27%;"> </div><div class="image-view" data-height="411" data-width="482" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344503687.png?imageMogr2/auto-orient/strip|imageView2/2/w/482)</div></div><div class="image-caption" style="box-sizing: bord
er-box;">图3.  
2</div></div>#### **方法四：  


1.在命令行输入：sudo raspi-config，然后回车，如下图4.1：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 27px; max-width: 554px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 4.87%;"> </div><div class="image-view" data-height="27" data-width="554" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344510607.png?imageMogr2/auto-orient/strip|imageView2/2/w/554)</div></div><div class="image-caption" style="box-sizing: border-box;">图4.1</div></div>2.选择第七项：“5 Interfacing Options”，回车，如下图4.2：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 258px; max-width: 554px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 46.57%;"> </div><div class="image-view" data-height="258" data-width="554" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344517345.png?imageMogr2/auto-orient/strip|imageView2/2/w/554)</div></div><div class="image-caption" style="box-sizing: border-box;">图4.2</div></div>3.选择第二项：“SSH”，回车，如下图4.3：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 253px; max-width: 554px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 45.67%;"> </div><div class="image-view" data-height="253" data-width="554" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344510614.png?imageMogr2/auto-orient/strip|imageView2/2/w/554)</div></div><div class="image-caption" style="box-sizing: border-box;">图4.3</div></div>4.选择是，回车。如下图4.4：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 318px; max-width: 429px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 74.13%;"> </div><div class="image-view" data-height="318" data-width="429" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344515466.png?imageMogr2/auto-orient/strip|imageView2/2/w/429)</div></div><div class="image-caption" style="box-sizing: border-box;">图4.4</div></div>5.最后点选“Finish”完成，等待重启即可，如下图4.5：

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 254px; max-width: 554px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 45.85%;"> </div><div class="image-view" data-height="254" data-width="554" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344510055.png?imageMogr2/auto-orient/strip|imageView2/2/w/554)</div></div><div class="image-caption" style="box-sizing: border-box;">图4.5</div></div># 远程连接树莓派

SSH客户端推荐PuTTY和Xshell(以PuTTY为例)。

打开PuTTY工具，输入IP，端口默认为22，如图，确定无误后点击 open。

<div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 436px; max-width: 450px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 96.89%;"> </div><div class="image-view" data-height="436" data-width="450" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344515416.png?imageMogr2/auto-orient/strip|imageView2/2/w/450)</div></div><div class="image-caption" style="box-sizing: border-box;">以PuTTY为例</div></div><div class="image-package" style="box-sizing: border-box;"><div class="image-container" style="background-color: transparent; box-sizing: border-box; max-height: 344px; max-width: 443px;"><div class="image-container-fill" style="box-sizing: border-box; padding-bottom: 77.65%;"> </div><div class="image-view" data-height="344" data-width="443" style="box-sizing: border-box;">![](http://www.zhaoweifeng.cn/blog/upload/202006012344516213.png?imageMogr2/auto-orient/strip|imageView2/2/w/443)</div></div><div class="image-caption" style="box-sizing: border-box;">默认用户名：pi 默认密码：raspberry</div></div></div>  
  
作者：Vip小木子  
链接：https://www.jianshu.com/p/654ee08d2b3a  
来源：简书  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

</div>