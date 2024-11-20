---
id: 408
title: '数据调用提示Referer restriction is taking effect [ 对应Discuz! 6.1 ]'
date: '2010-02-23T04:15:54+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=408'
permalink: /2010/02/23/%e6%95%b0%e6%8d%ae%e8%b0%83%e7%94%a8%e6%8f%90%e7%a4%bareferer-restriction-is-taking-effect-%e5%af%b9%e5%ba%94discuz-6-1-2/
categories:
    - log
tags:
    - Discuz
    - 提示
    - 数据
    - 调用
---

 <span class="Apple-style-span" style="font-family: Arial, 宋体, Verdana, sans-serif; line-height: 24px; font-size: 14px; color: rgb(75, 90, 97); "><span class="Apple-style-span" style="line-height: 21px; ">**问题分析：**</span></span>

这个错误因为论坛设置了数据来路限制,您的地址不是论坛允许的地址或者使用了代理服务器；

**解决方法：**

系统设置 =&gt; 工具 =&gt; 数据调用 =&gt; 设置 =&gt; 外部调用数据来路限制:添加相应的地址或者全部留空。