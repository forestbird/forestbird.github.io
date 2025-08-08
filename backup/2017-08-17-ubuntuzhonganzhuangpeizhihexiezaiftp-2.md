---
id: 475
title: Ubuntu中安装配置和卸载FTP
date: '2017-08-17T09:06:36+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=475'
permalink: /2017/08/17/ubuntuzhonganzhuangpeizhihexiezaiftp-2/
categories:
    - log
tags:
    - ubuntu
    - vsFTPd
    - 卸载
---

 **一.安装**

1.用<span style="background-color: rgb(153, 204, 255);">apt-get</span>工具安装<span style="background-color: rgb(153, 204, 255);">vsftpd</span>：

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$ sudo apt-get install vsftpd </span>

</div>   
2.检查FTP端口是否已经打开

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$ netstat -tnl </span>

</div>![](http://www.zhaoweifeng.cn/blog/upload/201708161707155402.png)

或者直接在浏览器里输入“<span style="background-color: rgb(153, 204, 255);">ftp://服务器IP</span>”

<span style="color: rgb(0, 128, 128);">开启、停止、重启vsftpd服务的命令：</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Xml代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">service vsftpd start | stop | restart </span>

</div>**<span style="font-size: 16px;">二.配置</span>**  
<span style="color: rgb(0, 0, 255);">1.修改配置文件</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$ sudo vi /etc/vsftpd.conf </span>

</div>**<span style="color: rgb(153, 51, 102);">主要配置：</span>**

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Xml代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;"><span class="attribute" style="color: red;">listen</span>=<span class="attribute-value" style="color: blue;">YES</span> # 服务器监听 </span>
2. <span style="color: black;"><span class="attribute" style="color: red;">local\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # 是否允许本地用户访问 </span>
3. <spa n="" style="color: black;"><spa class="attribute" n="" style="color: red;">write\_enable=<span class="attribute-value" style="color: blue;">YES</span> # 是否允许上传文件，不开启会报 550 permission denied </spa></spa>
4. <span style="color: black;"><span class="attribute" style="color: red;">anonymous\_enable</span>=<span class="attribute-value" style="color: blue;">NO</span> # 匿名访问允许，默认不要开启， </span>
5. <span style="color: black;">\#<span class="attribute" style="color: red;">anon\_upload\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # 匿名上传允许，默认是NO </span>
6. <span style="color: black;">\#<span class="attribute" style="color: red;">anon\_mkdir\_write\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # 匿名创建文件夹允许 </span>

</div>**<span style="font-size: 16px; color: rgb(0, 0, 255);">用户访问目录的权限设置：</span>**  
在<span style="color: rgb(51, 102, 255);">默认配置</span>下，<span style="color: rgb(0, 128, 0);">本地用户登入FTP后可以使用cd命令切换到其他目录</span>，这样会对系统带来安全隐患。可以通过以下三条配置文件来控制用户切换目录。

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Xml代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;"><span class="attribute" style="color: red;">chroot\_local\_user</span>=<span class="attribute-value" style="color: blue;">YES</span> # 用于指定用户列表文件中的用户是否允许切换到上级目录。默认值为NO。 </span>
2. <span style="color: black;"><span class="attribute" style="color: red;">chroot\_list\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # 设置是否启用chroot\_list\_file配置项指定的用户列表文件。默认值为NO。 </span>
3. <span style="color: black;"><span class="attribute" style="color: red;">chroot\_list\_file</span>=/etc/vsftpd.chroot\_list </span>
4. <span style="color: black;">\#禁用的列表名单，格式为一行一个用户，用于指定用户列表文件，该文件用于控制哪些用户可以切换到用户家目录的上级目录。 </span>

</div>   
<span style="color: rgb(51, 102, 255);">**通过搭配能实现以下几种效果：**</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Xml代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">(1).当<span class="attribute" style="color: red;">chroot\_list\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span>，<span class="attribute" style="color: red;">chroot\_local\_user</span>=<span class="attribute-value" style="color: blue;">YES</span>时，在/etc/vsftpd.chroot\_list文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。 </span>
2. <span style="color: black;">(2).当<span class="attribute" style="color: red;">chroot\_list\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span>，<span class="attribute" style="color: red;">chroot\_local\_user</span>=<span class="attribute-value" style="color: blue;">NO</span>时，在/etc/vsftpd.chroot\_list文件中列出的用户，不能切换到其他目录；未在文件中列出的用户，可以切换到其他目录。 </span>
3. <span style="color: black;">(3).当<span class="attribute" style="color: red;">chroot\_list\_enable</span>=<span class="attribute-value" style="color: blue;">NO</span>，<span class="attribute" style="color: red;">chroot\_local\_user</span>=<span class="attribute-value" style="color: blue;">YES</span>时，所有的用户均不能切换到其他目录。 </span>
4. <span style="color: black;">(4).当<span class="attribute" style="color: red;">chroot\_list\_enable</span>=<span class="attribute-value" style="color: blue;">NO</span>，<span class="attribute" style="color: red;">chroot\_local\_user</span>=<span class="attribute-value" style="color: blue;">NO</span>时，所有的用户均可以切换到其他目录。 </span>

</div><span style="color: rgb(51, 102, 255);"> </span>

其他配置解释：

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Xml代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;"><span class="attribute" style="color: red;">local\_umask</span>=<span class="attribute-value" style="color: blue;">022</span> # FTP上本地的文件权限，默认是077 </span>
2. <span style="color: black;"><span class="attribute" style="color: red;">dirmessage\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # 进入文件夹允许 </span>
3. <span style="color: black;"><span class="attribute" style="color: red;">xferlog\_enable</span>=<span class="attribute-value" style="color: blue;">YES</span> # ftp 日志记录允许 </span>
4. <span style="color: black;"><span class="attribute" style="color: red;">connect\_from\_port\_20</span>=<span class="attribute-value" style="color: blue;">YES</span> # 启用20号端口作为数据传送的端口 </span>
5. <span style="color: black;"><span class="attribute" style="color: red;">xferlog\_enable</span>=<span class="attribute-value" style="color: blue;">yes</span> # 激活上传和下传的日志 </span>
6. <span style="color: black;"><span class="attribute" style="color: red;">xferlog\_std\_format</span>=<span class="attribute-value" style="color: blue;">yes</span> # 使用标准的日志格式 </span>
7. <span style="color: black;"><span class="attribute" style="color: red;">ftpd\_banner</span>=<span class="attribute-value" style="color: blue;">XXXXX</span> # 欢迎信息 </span>

</div>   
<span style="font-size: 16px;">**相关链接：**</span>  
[vsftpd配置文件详解](http://www.cnblogs.com/acpp/archive/2010/02/08/1666054.html)

<span style="color: rgb(0, 0, 255);">2.重启vsftpd服务</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$sudo /etc/init.d/vsftpd restart </span>
2. <span style="color: black;">或者 </span>
3. <span style="color: black;">$ sudo service vsftpd restart </span>

</div><span style="color: rgb(255, 0, 0);">注：修改配置文件后一定要重启服务才能生效</span>

   
**<span style="font-size: 16px;">三.FTP增加删除用户</span>**  
<span style="color: rgb(0, 0, 255);">1.增加用户</span>  
\#创建目录

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">mkdir -p /home/test </span>

</div>   
\#创建用户

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">sudo useradd -g ftp -d /home/test -m test </span>

</div>(注：<span style="background-color: rgb(153, 204, 255);">g：</span>用户所在的组 <span style="background-color: rgb(153, 204, 255);">d：</span>表示创建用户的自己目录的位置给予指定<span style="background-color: rgb(153, 204, 255);"> m：</span>不建立默认的自家目录，也就是说在/home下没有自己的目录)

\#设置用户口令

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">sudo passwd test123 </span>

</div>   
编辑<span style="background-color: rgb(204, 153, 255);">/etc/vsftpd.chroot\_list</span>文件，将ftp的帐户名添加进去，保存退出

<span style="background-color: rgb(153, 204, 255);">重新启动vsftpd：</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$ sudo service vsftpd restart </span>

</div><span style="color: rgb(255, 0, 0);">注：修改用户权限文件</span><span style="background-color: rgb(255, 204, 153);">vsftpf.chroot\_list</span><span style="color: rgb(255, 0, 0);">文件后一定要重启服务才能生效</span>

<span style="color: rgb(0, 0, 255);">2.删除用户</span>

<div class="dp-highlighter" id="" style="font-family: Monaco, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Consolas, 'Courier New', monospace; width: 679px; overflow: auto; margin-left: 9px; padding: 1px; word-break: break-all; word-wrap: break-word; line-height: 25.2px;"><div class="bar"><div class="tools" style="padding: 3px; margin: 0px; font-weight: bold;">Java代码 <a style="color: rgb(16, 138, 198); text-decoration: underline;" title="收藏这段代码">![收藏代码](http://www.zhaoweifeng.cn/blog/upload/201708161707152308.png)</a></div></div>1. <span style="color: black;">$ sudo userdel test </span>

</div>**<span style="font-size: 16px;">四.卸载</span>**

<span style="background-color: rgb(153, 204, 255);">sudo apt-get remove –purge vsftpd</span>

(–purge 选项表示彻底删除改软件和相关文件)