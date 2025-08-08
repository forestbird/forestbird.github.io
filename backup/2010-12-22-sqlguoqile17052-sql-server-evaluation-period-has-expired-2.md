---
id: 434
title: 'sql过期了17052: SQL Server evaluation period has expired'
date: '2010-12-22T02:16:54+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=434'
permalink: /2010/12/22/sqlguoqile17052-sql-server-evaluation-period-has-expired-2/
categories:
    - log
tags:
    - '17052'
    - '17055'
    - evaluation
    - expired
    - mssql
    - mssql2000
    - period
    - server
    - 不启动
    - 改
    - 方法
    - 时间
    - 盗版
    - 系统
    - 解决
    - 过期
---

这可是违法的哦，还是去买license吧  
SQL补丁多的是啊…  
不知，用批处理好了：  
copy con c:\\setime.cmd  
echo off  
date 2007/06/01  
cd Program Files\\Microsoft SQL Server\\MSSQL.2\\MSSQL\\Binn&gt;  
start sqlservr.exe /wait  
^Z  
放到cmd命令窗口执行下就ok了。怎么把时间设回来？就不知了  
去找个别的版本试试吧。  
也有可能你打补丁使D版破解失效了。  
看来还是不死心啊  
D版是中国特色嘛~虽然我也不支持企业这么做……

半年都没启动过Sql Server了，现在要用时，发现服务没法启动。  
打开事件查看器，看到如下事件：  
事件类型: 信息  
事件来源: MSSQLSERVER  
事件种类: (2)  
事件 ID: 17055  
日期: 2007-4-3  
事件: 23:33:59  
用户: N/A  
计算机: 723FEE4590A948B  
描述:  
17052:   
SQL Server evaluation period has expired.

数据:  
0000: 9c 42 00 00 0a 00 00 00 œB……  
0008: 10 00 00 00 37 00 32 00 ….7.2.  
0010: 33 00 46 00 45 00 45 00 3.F.E.E.  
0018: 34 00 35 00 39 00 30 00 4.5.9.0.  
0020: 41 00 39 00 34 00 38 00 A.9.4.8.  
0028: 42 00 00 00 00 00 00 00 B…….

原来是过期了。  
为了继续使用，只得又把系统时间改成安装时的时间，服务又正常启动了，完了后再把时间改回来。

这个评估版真是没劲！

事件类型: 信息  
事件来源: MSSQLSERVER  
事件种类: (2)  
事件 ID: 17055  
日期: 2007-7-28  
事件: 23:38:46  
用户: N/A  
计算机: 723FEE4590A948B  
描述:  
17052:   
Microsoft SQL Server 2000 – 8.00.2039 (Intel X86)   
 May 3 2005 23:18:38   
 Copyright (c) 1988-2003 Microsoft Corporation  
 Enterprise Evaluation Edition on Windows NT 5.1 (Build 2600: Service Pack 2)

数据:  
0000: 9c 42 00 00 0a 00 00 00 œB……  
0008: 10 00 00 00 37 00 32 00 ….7.2.  
0010: 33 00 46 00 45 00 45 00 3.F.E.E.  
0018: 34 00 35 00 39 00 30 00 4.5.9.0.  
0020: 41 00 39 00 34 00 38 00 A.9.4.8.  
0028: 42 00 00 00 00 00 00 00 B…….