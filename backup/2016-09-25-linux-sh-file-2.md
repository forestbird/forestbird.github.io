---
id: 436
title: 'Linux下面如何运行 SH文件'
date: '2016-09-25T00:48:56+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=436'
permalink: /2016/09/25/linux-sh-file-2/
categories:
    - log
tags:
    - SH文件
    - 运行
---

 <span style="color: rgb(51, 51, 51); font-family: 'Microsoft YaHei', arial, 'courier new', courier, 宋体, monospace; font-size: 16px; line-height: 29px; white-space: pre-wrap;">首先你要让文件有能够执行的权限，比如你的文件是a.sh那么你可以</span>

```
chmod +x  a.sh<br></br>然后运行文件就可以了<br></br>./a.sh<br></br>这样运行是a.sh在当前工作目录，如果文件没在<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3PjRvPhcvuj-WuyRzPjmd0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHT1n1cLrjczrHf1rjR4rHnsPs" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none;" target="_blank">当前目录</a>，那么就需要用<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3PjRvPhcvuj-WuyRzPjmd0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHT1n1cLrjczrHf1rjR4rHnsPs" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none;" target="_blank">绝对路径</a>来执行,比如<br></br>/opt/a.sh<br></br>/opt/test/a.sh
```

---

```
<span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">命令行下面:</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">1.chmod 空格"+x" 空格 你的sh文件名 (+x是一个整体,不要拆开)</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">2.输入"./你的sh文件名" 即可执行</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">举例:</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">1 chmod +x helloworld.sh</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">2 ./helloworld.sh</span>
```

---

```
<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E5%9B%BE%E5%BD%A2%E7%95%8C%E9%9D%A2&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3PjRvPhcvuj-WuyRzPjmd0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHT1n1cLrjczrHf1rjR4rHnsPs" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none; font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;" target="_blank">图形界面</a><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">的话右击打开终端，文本界面的话直接输入：</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">chmod a+x *.sh（*为你的文件名）</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">或者</span><br style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;"></br><span style="font-family: 'Microsoft YaHei', arial, 宋体, sans-serif, tahoma; font-size: 14px; line-height: 24px; white-space: normal;">bash *.sh     <br type="_moz"></br></span>
```