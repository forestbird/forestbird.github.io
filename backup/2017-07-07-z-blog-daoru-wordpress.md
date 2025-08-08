---
id: 80
title: 'z-blog 导入 wordpress'
date: '2017-07-07T22:46:09+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=80'
permalink: /2017/07/07/z-blog-daoru-wordpress/
categories:
    - log
tags:
    - WordPress
    - z-blog
    - 导入
---

 <span style="color: rgb(85, 85, 85); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 26.6px; text-align: justify; text-indent: 2em;">很多朋友刚建立博客的时候都是采用国内优秀的博客系统：Z-BLOG，用一段时间过后很多人都想转移到wordpress,各种转移原因很多。学朋的主要原因就是Z-BLOG官方长时间不对博客进行维护升级。大家都知道一款免费给别人用的开源系统，随着时间的推移病毒、漏洞会越来越多，如果失去了官方的维护，这个系统终将会被淘汰。</span>

起初学朋也在网上找了很多转移方面的案例、资料。最后找到了一些总结下开始转移，转移过程中并不像想象的那么轻松，遇到过很多问题，<span style="margin: 0px; padding: 0px; color: rgb(255, 0, 0);">**特别是转移系统过后的URL地址失效问题、标题问题，这对SEO那是极大的打击**</span>。

### 转移准备：

转移前全站数据备份，最好不要在当前空间上面进行转移，最好是新X一个空间，数据复制过去在新的上面转移。为的就是转移失败不影响网站的正常访问以及转移失败后可以多次测试，达到最佳效果。力争把网站转移的时间对外看来仅仅是域名重新解析的那10分钟生效时间。

注意：请Xlinux主机。

### Z-BLOG系统导出全部数据：

下载插件：http://www.lixuepeng.com/wp-content/uploads/2012/09/movabletype.rar

#### Z-BLOG安装插件

进入Zblog的后台——插件管理——从本地导入ZPI文件——选择(movabletype.zip)——然后提交，如图所示，安装完成后启用插件。

<span style="line-height: 26.6px; text-indent: 2em;">进入插件管理——然后单击movabletype插件右边的管理，进行内容的导出，如图所示：</span>

![z-blog完美转移到wordpress](http://www.zhaoweifeng.cn/blog/upload/201707071447376385.jpg "Z-BLOG安装数据转移插件")

<span style="margin: 0px; padding: 0px; color: rgb(255, 0, 0);">**这里李学朋要重点说明下，数据导出有讲究。**</span>

就学朋的博客而言，栏目页的格式如

那我就只有分批次导出了，具体导出文件如下：

![Z-BLOG连续文章分批次导出](http://www.zhaoweifeng.cn/blog/upload/201707071447383588.jpg "Z-BLOG连续文章分批次导出")

导出时可以导出标签、评论、内容等，按照自己的需要进行选择，点击提交就可了，如上图所示，保存好文件。只要导出的时候没有报错那就一定没问题。

### WordPress系统导入数据：

进入WordPress后台——工具——导入——Movable Type and TypePad——选择刚才生成好的“\*.asp“，然后单击上传文件并导入，如图所示。

注意：这里提示文件的大小最大为20M（根据不同的空间限制，大小不同），如果Zblog文章过多，生成的文件过大，那么我们可以分为多次操作(分批次注意上面断开的缺口)，比如文章共有100篇，总大小为30M，那么我们可以先生成前50篇，再生成后50篇。将体积控制下15M内，然后再上传到WordPress中。

![WP导入数据](http://www.zhaoweifeng.cn/blog/upload/201707071447386223.jpg "WP导入数据")

<span style="margin: 0px; padding: 0px; color: rgb(255, 0, 0);">**特别注意**：</span>wordpress在导入数据之前请确认文章表的自动增量已经到哪里了。如果你新安装的wp程序已经发布文章那他的自动增量ID号就已经不是从1开始的了。如果导入以上数据全部将错位。怎么查看呢？本地安装Navicat for MySQL 数据库客户端（百度一下即可找到破解版）或者直接使用空间商提供的在线数据库查看程序。查看WP新数据库里面的wp\_posts表。如图：

![Navicat for MySQL 查看wordpress的表](http://www.zhaoweifeng.cn/blog/upload/201707071447393556.jpg "Navicat for MySQL 查看wordpress的表")

如果途中“自动递增数值不为0，那么需要清理该表自动增量值”清理MYSQL数据库自动增量值的SQL语法如图，黑色部分是你的数据库名。写好后选择执行即可。

![清理MYSQL数据表自动增量语法](http://www.zhaoweifeng.cn/blog/upload/201707071447391871.jpg "清理MYSQL数据表自动增量语法")

### 实际操作：

以上是全部转移过程的技术操作，现在就跟随学朋一起操作下吧。<span style="margin: 0px; padding: 0px; color: rgb(255, 0, 0);">**还有一点，WP的数据库文章表的自动增量是从编号为2开始的。也就是说编号为1的系统给占了。那我们的文章就从2开始导入。**</span>

我们先来看学朋博客的文章连续程度：

![z-blog数据导出分析](http://www.zhaoweifeng.cn/blog/upload/201707071447397277.jpg "z-blog数据导出分析")

<div style="margin: 0px; padding: 0px; border: 0px; color: rgb(51, 51, 51); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 21.6px;"> 从图中可以看出 编号为1系统会保留，2-5连续，7-18连续，20-30连续，32-37连续 等等，学朋就拿前面的几个作为例子来讲解，后面的和前面的操作步骤一样。**具体可以得出：**ID为1的保留ID为6的没的ID为19的没的ID为31的没的 步骤：那我们直接把之前导出的文件导入进入WP。首先导入2-5.asp 文件，我们测试下，所有文章一一对应之前Z-BLOG的地址，并没有错位。如果你的出现错位了，那么需要你重新清理MYSQL数据库表的自动增量，清理方式上文中已经提到。然后分析原因重新来。

<span style="margin: 0px; padding: 0px; color: rgb(255, 0, 0);">**特别注意：**</span>wordpress在安装完成后不要点击发布文章，原因是WP有自动保存草稿的功能，他会占用你的ID号。

如果以上2-5导入成功，实现了URL一一对应那我们来说6这个ID怎么被占用。以上说了WP有自动保存草稿的功能，他会自动占用ID号，如果你采用发布一篇文章的做法想占用ID为6的号码那就错了，因为在你发布这文章过程中每隔一段时间WP程序会自动保存草稿，如果你写这文章的时间长了不只是ID为6的被占用，有可能7，8，9等等也会被占用，所以不能采用WP的发布文章系统发布文章。除非你关闭了WP的自动保存草稿的功能。。那就只能从原来Z-BLOG系统上面导出一个1篇帖子的文件，在WP上面再导入，这样即可完美占用ID为6的位置。

我们继续导入7-18.asp,导入完成后理解查看是否和之前的URL一一对应，然后再导入一篇文章继续导入20-30.asp，依次类推，每次导入完成都需要立即检查是否一一对应，查找原因。如果没有对应那就清理数据库自动增量从新来过。

**结语：**以上是Z-BLOG完美导入wordpress之URL篇的全部过程，如果您还有不懂的可以联系学朋。不需要你做大量的301，不需要你去监控每一个页面URL是否出现问题。换程序实现URL一一对应如此简单。下一篇讲介绍插件all in one seo 的用法及其其他有用的WP插件，以及该插件和当前模板（萧寒模板）的冲突。

</div>