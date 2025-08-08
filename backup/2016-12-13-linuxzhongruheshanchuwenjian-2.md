---
id: 452
title: linux中如何删除文件
date: '2016-12-13T14:00:34+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=452'
permalink: /2016/12/13/linuxzhongruheshanchuwenjian-2/
categories:
    - log
tags:
    - linux
    - rm
---

 1、删除文件夹以及文件夹中的所有文件命令：

<div>rm -rf 目录名字</div><div>其中：</div><div>-r：向下递归删除</div><div>-f：直接强行删除，且没有任何提示</div><div> </div><div>2、删除文件命令</div><div>rm -f 文件名</div><div>将会强行删除文件，且无提示</div><div> </div><div>注意：</div><div>使用rm -rf要格外注意，linux中没有回收站，慎重删除</div>