---
id: 104
title: dietpi远程桌面与中文汉化教程
date: '2018-01-26T18:09:02+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=104'
permalink: /2018/01/26/dietpiyuanchengzhuomianyuzhongwenhanhuajiaocheng/
categories:
    - log
tags:
    - DietPi
    - 树莓派
---

```
<div><div class="image-package"><div class="image-container" style="max-width: 700px; max-height: 392px; background-color: transparent;"><div class="image-container-fill" style="padding-bottom: 56.02%;"> </div> <div class="image-view" data-height="717" data-width="1280"><img alt="" data-original-filesize="408303" data-original-format="image/png" data-original-height="717" data-original-src="//upload-images.jianshu.io/upload_images/2675631-9e5fc8a8fca8bd62.png" data-original-width="1280" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-9e5fc8a8fca8bd62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div></div> <div class="image-caption"> </div></div> <blockquote> <p>今天教大家<strong>dietpi</strong>系统汉化教程,当然如果你刷的不是<strong>dietpi</strong>也可以参照教程思路进行汉化.比如:<a href="https://link.jianshu.com?t=https%3A%2F%2Fwww.armbian.com%2Fdownload%2F" rel="nofollow noopener noreferrer" target="_blank">armbian</a><br></br> 固件下载链接:<br></br> <a href="https://link.jianshu.com?t=http%3A%2F%2Fdietpi.com%2F%23download" rel="nofollow noopener noreferrer" target="_blank">dietpi下载</a><br></br> <a href="https://link.jianshu.com?t=https%3A%2F%2Fwww.armbian.com%2Fdownload%2F" rel="nofollow noopener noreferrer" target="_blank">armbian下载</a><br></br> <strong>如果你已经刷好固件了那么就开始吧！</strong></p> </blockquote> <h3>1.本地化配置</h3> <h5>打开配置工具</h5> <p>控制台输入:</p> <code class="ruby">root@DietPi<span class="hljs-symbol">:~</span><span class="hljs-comment"># dietpi-config</span> </code>
<h5>选中“ Language/Regional Options ”回车</h5>
<div class="image-package">
<div class="image-container" style="max-width: 642px; max-height: 377px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 58.720000000000006%;"> </div>
<div class="image-view" data-height="377" data-width="642"><img alt="" data-original-filesize="12891" data-original-format="image/png" data-original-height="377" data-original-src="//upload-images.jianshu.io/upload_images/2675631-e10b17dfaced97d8.png" data-original-width="642" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-e10b17dfaced97d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/642"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<h5>选中“ Locale   Change Language and Regional Settings ”回车</h5>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 383px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.84%;"> </div>
<div class="image-view" data-height="383" data-width="640"><img alt="" data-original-filesize="9062" data-original-format="image/png" data-original-height="383" data-original-src="//upload-images.jianshu.io/upload_images/2675631-6ddb4d63e40a60c9.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-6ddb4d63e40a60c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 382px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.69%;"> </div>
<div class="image-view" data-height="382" data-width="640"><img alt="" data-original-filesize="8123" data-original-format="image/png" data-original-height="382" data-original-src="//upload-images.jianshu.io/upload_images/2675631-babfcc34219040e2.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-babfcc34219040e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<h5>按上下架选择语言,空格选中自己需要的,然后回车</h5>
<p>这里我们就选择<strong>zh_CN.UTF-8</strong></p>
<div class="image-package">
<div class="image-container" style="max-width: 642px; max-height: 380px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.19%;"> </div>
<div class="image-view" data-height="380" data-width="642"><img alt="" data-original-filesize="15495" data-original-format="image/png" data-original-height="380" data-original-src="//upload-images.jianshu.io/upload_images/2675631-759ddf16f93273f5.png" data-original-width="642" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-759ddf16f93273f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/642"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<p> </p>
<p>一样选择<strong>zh_CN.UTF-8</strong></p>
<div class="image-package">
<div class="image-container" style="max-width: 642px; max-height: 382px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.5%;"> </div>
<div class="image-view" data-height="382" data-width="642"><img alt="" data-original-filesize="14056" data-original-format="image/png" data-original-height="382" data-original-src="//upload-images.jianshu.io/upload_images/2675631-702750fae9618c66.png" data-original-width="642" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-702750fae9618c66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/642"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<p> </p>
<h5>等待完成后返回与重启设备</h5>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 380px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.38%;"> </div>
<div class="image-view" data-height="380" data-width="640"><img alt="" data-original-filesize="9673" data-original-format="image/png" data-original-height="380" data-original-src="//upload-images.jianshu.io/upload_images/2675631-bdfb60d05f23f09e.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-bdfb60d05f23f09e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">返回</div>
</div>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 383px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.84%;"> </div>
<div class="image-view" data-height="383" data-width="640"><img alt="" data-original-filesize="13286" data-original-format="image/png" data-original-height="383" data-original-src="//upload-images.jianshu.io/upload_images/2675631-afae67faa7712f80.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-afae67faa7712f80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">返回</div>
</div>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 645px; max-height: 383px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.38%;"> </div>
<div class="image-view" data-height="383" data-width="645"><img alt="" data-original-filesize="5473" data-original-format="image/png" data-original-height="383" data-original-src="//upload-images.jianshu.io/upload_images/2675631-4a857db4868146cb.png" data-original-width="645" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-4a857db4868146cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/645"></img></div>
</div>
<div class="image-caption">确定返回</div>
</div>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 639px; max-height: 380px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.47%;"> </div>
<div class="image-view" data-height="380" data-width="639"><img alt="" data-original-filesize="7240" data-original-format="image/png" data-original-height="380" data-original-src="//upload-images.jianshu.io/upload_images/2675631-a1f4b8c11701a748.png" data-original-width="639" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-a1f4b8c11701a748.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/639"></img></div>
</div>
<div class="image-caption">建议重启</div>
</div>
<h5>重启完成后,输入命令测试</h5>
<div class="image-package">
<div class="image-
container" style="max-width: 636px; max-height: 376px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.12%;"> </div>
<div class="image-view" data-height="376" data-width="636"><img alt="" data-original-filesize="79431" data-original-format="image/gif" data-original-height="376" data-original-src="//upload-images.jianshu.io/upload_images/2675631-40106608f15f98d3.gif" data-original-width="636" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-40106608f15f98d3.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/636"></img></div>
</div>
<div class="image-caption">测试</div>
</div>
<h4>2.安装远程桌面</h4>
<h5>进入dietpi软件管理工具</h5>
<p>控制台输入:</p>
<code class="ruby">root@DietPi<span class="hljs-symbol">:~</span><span class="hljs-comment"># dietpi-software</span> </code>
<h5>选中“ Software Optimized ”回车</h5>
<div class="image-package">
<div class="image-container" style="max-width: 645px; max-height: 388px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 60.160000000000004%;"> </div>
<div class="image-view" data-height="388" data-width="645"><img alt="" data-original-filesize="17379" data-original-format="image/png" data-original-height="388" data-original-src="//upload-images.jianshu.io/upload_images/2675631-b3595ad9dd3b2a51.png" data-original-width="645" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-b3595ad9dd3b2a51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/645"></img></div>
</div>
<div class="image-caption">回车</div>
</div>
<h5>这里可以自定义选择自己需要的桌面环境与远程工具</h5>
<p>我这就安装<strong>XFCE</strong>做示例吧</p>
<div class="image-package">
<div class="image-container" style="max-width: 643px; max-height: 387px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 60.19%;"> </div>
<div class="image-view" data-height="387" data-width="643"><img alt="" data-original-filesize="24083" data-original-format="image/png" data-original-height="387" data-original-src="//upload-images.jianshu.io/upload_images/2675631-8a55d84e801f3131.png" data-original-width="643" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-8a55d84e801f3131.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/643"></img></div>
</div>
<div class="image-caption">13.png</div>
</div>
<p> </p>
<h5>选好了后可以直接回车确定</h5>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 380px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.38%;"> </div>
<div class="image-view" data-height="380" data-width="640"><img alt="" data-original-filesize="23982" data-original-format="image/png" data-original-height="380" data-original-src="//upload-images.jianshu.io/upload_images/2675631-ed5a53253f9b769b.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-ed5a53253f9b769b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">确定</div>
</div>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 382px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.69%;"> </div>
<div class="image-view" data-height="382" data-width="640"><img alt="" data-original-filesize="10300" data-original-format="image/png" data-original-height="382" data-original-src="//upload-images.jianshu.io/upload_images/2675631-64843a1895c12247.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-64843a1895c12247.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">NO</div>
</div>
<h5>返回到 DietPi-Software 首页后选择开始安装(可能会自动重启)</h5>
<div class="image-package">
<div class="image-container" style="max-width: 640px; max-height: 385px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 60.160000000000004%;"> </div>
<div class="image-view" data-height="385" data-width="640"><img alt="" data-original-filesize="17303" data-original-format="image/png" data-original-height="385" data-original-src="//upload-images.jianshu.io/upload_images/2675631-7946a627ec6d9d39.png" data-original-width="640" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-7946a627ec6d9d39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/640"></img></div>
</div>
<div class="image-caption">安装</div>
</div>
<div class="image-package">
<div class="image-container" style="max-width: 635px; max-height: 382px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 60.160000000000004%;"> </div>
<div class="image-view" data-height="382" data-width="635"><img alt="" data-original-filesize="14163" data-original-format="image/png" data-original-height="382" data-original-src="//upload-images.jianshu.io/upload_images/2675631-3c5f3b2544faa4f6.png" data-original-width="635" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-3c5f3b2544faa4f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/635"></img></div>
</div>
<div class="image-caption">安装</div>
</div>
<h5>远程连接测试</h5>
<p>windows远程</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 485px; max-height: 322px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 66.39%;"> </div>
<div class="image-view" data-height="322" data-width="485"><img alt="" data-original-filesize="793266" data-original-format="image/gif" data-original-height="322" data-original-src="//upload-images.jianshu.io/upload_images/2675631-fc2c61958cc89ba0.gif" data-original-width="485" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-fc2c61958cc89ba0.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/485"></img></div>
</div>
<div class="image-caption"> </div>
</div>
<p></p>
<p>VNC远程</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 349px; max-height: 191px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 54.730000000000004%;"> </div>
<div class="image-view" data-height="191" data-width="349"><img alt="" data-original-filesize="582612" data-original-format="image/gif" data-original-height="191" data-original-src="//upload-images.jianshu.io/upload_images/2675631-7b02167ff50dc8ce.gif" data-original-width="349" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-7b02167ff50dc8ce.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/349"></img></div>
</div>
<div class="image-caption"> </div>
</div>
<h4>3.乱码处理</h4>
<blockquote>
<p>远程成功了,但是我们发现桌面出现了乱码<br></br>这是缺少字体文件造成的<br></br>我们可以将<strong>windows</strong>系统字体复制<strong>dietpi</strong><br></br><strong>C:\Windows\Fonts</strong>选择字体复制到<strong>/用户路径/.fonts/</strong><br></br>这里我复制的办法是在windows搭建简单服务如何再用wget下载的<br></br>当然你可以可以用其他办法，这里不做详细说明</p>
</blockquote>
<p>乱码</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 466px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 66.7%;"> </div>
<div class="image-view" data-height="737" data-width="1105"><img alt="" data-original-filesize="415880" data-original-format="image/png" data-original-height="737" data-original-src="//upload-images.jianshu.io/upload_images/2675631-f5112e6c93228166.png" data-original-width="1105" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-f5112e6c93228166.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div>
</div>
<div class="image-caption">乱码</div>
</div>
<p>字体</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 675px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 63.5%;"> </div>
<div class="image-view" data-height="67
5" data-width="1063"><img alt="" data-original-filesize="256002" data-original-format="image/png" data-original-height="675" data-original-src="//upload-images.jianshu.io/upload_images/2675631-712ff8f151d92760.png" data-original-width="1063" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-712ff8f151d92760.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div>
</div>
<div class="image-caption">字体</div>
</div>
<p>自定义外观字体</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 409px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 58.56%;"> </div>
<div class="image-view" data-height="722" data-width="1233"><img alt="" data-original-filesize="293414" data-original-format="image/png" data-original-height="722" data-original-src="//upload-images.jianshu.io/upload_images/2675631-c20dc136577faa9f.png" data-original-width="1233" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-c20dc136577faa9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div>
</div>
<div class="image-caption">自定义外观字体</div>
</div>
<p>重启系统再次远程</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 697px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 76.75999999999999%;"> </div>
<div class="image-view" data-height="697" data-width="908"><img alt="" data-original-filesize="212077" data-original-format="image/png" data-original-height="697" data-original-src="//upload-images.jianshu.io/upload_images/2675631-55f311a026534f2d.png" data-original-width="908" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-55f311a026534f2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div>
</div>
<div class="image-caption">重启</div>
</div>
<h4>4.彻底汉化</h4>
<p>在第3部分我们解决了字体问题,但还没彻底汉化<br></br>部分菜单或标题名称还是英文的<br></br>输入命令<strong>nano /etc/default/locale</strong>进行修改</p>
<code>LANGUAGE=zh_CN.UTF-8 LANG=zh_CN.UTF-8 LC_MESSAGES=zh_CN.UTF-8 </code>
<div class="image-package">
<div class="image-container" style="max-width: 642px; max-height: 379px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 59.03%;"> </div>
<div class="image-view" data-height="379" data-width="642"><img alt="" data-original-filesize="17276" data-original-format="image/gif" data-original-height="379" data-original-src="//upload-images.jianshu.io/upload_images/2675631-61383b89f6d6fd5d.gif" data-original-width="642" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-61383b89f6d6fd5d.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/642"></img></div>
</div>
<div class="image-caption">ddxx.gif</div>
</div>
<p>编辑完成后重启再次连接</p>
<p></p>
<div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 657px; background-color: transparent;">
<div class="image-container-fill" style="padding-bottom: 66.7%;"> </div>
<div class="image-view" data-height="657" data-width="985"><img alt="" data-original-filesize="199962" data-original-format="image/png" data-original-height="657" data-original-src="//upload-images.jianshu.io/upload_images/2675631-d7062c8a45cb6b4a.png" data-original-width="985" decoding="async" src="//upload-images.jianshu.io/upload_images/2675631-d7062c8a45cb6b4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"></img></div>
</div>
<div class="image-caption"> </div>
</div>
<h4>到此dietpi远程桌面与汉化教程就结束了哦</h4>
</div>
<p>作者：关爱单身狗成长协会链接：https://www.jianshu.com/p/ad8b6e531970來源：简书著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
```