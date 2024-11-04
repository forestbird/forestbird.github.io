---
id: 471
title: 树莓派调整分区大小
date: '2017-08-15T06:15:10+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=471'
permalink: /2017/08/15/shupaidiaozhengfenqudaxiao-2/
categories:
    - log
tags:
    - tf卡
    - 树莓派
    - 格式化
    - 空间大小
---

 <span style="color: rgb(51, 51, 51); font-family: Georgia, 'Bitstream Charter', serif; font-size: 16px; line-height: 24px;">本人的树莓派使用的是8G的TF卡。可是最近频繁提示 空间不足，df -h 看看已经用了96%了，插到电脑上显示55.9M 可能是windows只能识别fat32这么多，其他可能未被识别。</span>

[![20141206215547](http://www.zhaoweifeng.cn/blog/upload/201708141416068487.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416068487.png)

[![20141206215101](http://www.zhaoweifeng.cn/blog/upload/201708141416078776.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416078776.png)

[![20141206215120](http://www.zhaoweifeng.cn/blog/upload/201708141416090854.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416090854.png)

我们到磁盘管理器中查看。

[![20141206215152](http://www.zhaoweifeng.cn/blog/upload/201708141416118373.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416118373.png)

还有4.35G没有被识别，好下面我们将这4.35G放到树莓派中。

执行如下命令！！！

<span style="border: 0px; margin: 0px; padding: 0px; vertical-align: baseline; color: rgb(255, 0, 0); background: transparent;">PS:磁盘操作命令操作不当可能会引起数据丢失，无论有没有把握都必须备份重要的数据。</span>

[![20141206220646](http://www.zhaoweifeng.cn/blog/upload/201708141416130707.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416138016.png)

成功后如下图

[![2014120
6220701](http://www.zhaoweifeng.cn/blog/u
pload/20170814
1416158380.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416158380.png)

然后我们重启树莓派

<span style="border: 0px; margin: 0px; padding: 0px; vertical-align: baseline; background: transparent;">[![20141206220831](http://www.zhaoweifeng.cn/blog/upload/201708141416154766.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416154383.png)</span>

执行成功后，再次df看看。

[![20141206220858](http://www.zhaoweifeng.cn/blog/upload/201708141416168316.png)](http://www.zhaoweifeng.cn/blog/upload/201708141416168316.png)

Size为 7.2G，我的是8G的内存卡正常了，使用率为38%。