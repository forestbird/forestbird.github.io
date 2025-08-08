---
id: 435
title: 'z-blog asp版本找回密码、密码重置工具'
date: '2016-09-21T02:24:31+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=435'
permalink: /2016/09/21/asp-z-blogpasswordrest-2/
categories:
    - log
tags:
    - asp版本
    - z-blog
    - 密码重置
    - 工具
---

 <span style="color: rgb(157, 137, 143); font-family: Georgia, PMingLiU, Arial; font-size: 1.1em; letter-spacing: 0.1em; line-height: 1.8em; text-indent: 2.2em;">该工具代码由</span><span style="color: rgb(157, 137, 143); font-family: Georgia, PMingLiU, Arial; font-size: 1.1em; letter-spacing: 0.1em; text-indent: 2.2em; line-height: 23.1px; margin: 0px; padding: 0px; text-decoration: underline;">江海客</span><span style="color: rgb(157, 137, 143); font-family: Georgia, PMingLiU, Arial; font-size: 1.1em; letter-spacing: 0.1em; line-height: 1.8em; text-indent: 2.2em;">编写。</span>

使用方法：把以下代码复制到记事本里，保存为 repess.asp，用ftp传到博客根目录（首页default.asp所在的文件夹），用浏览器打开页面，就自动把密码重置为：yyidea。重置后用 yyidea 作为密码登录博客后台，把密码改为自己需要的。修改完成后一定要记得在ftp下删除这个文件。

代码：

<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;%@ CODEPAGE=65001 %&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;% Option Explicit %&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;% On Error Resume Next %&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;% Response.Charset="UTF-8" %&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;% Response.Buffer=True %&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;!– #include file="c\_custom.asp" –&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">&lt;%</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘ 目的： 检查引用</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘ 输入： SQL值（引用）</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘ 返回：</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">Function FilterSQL(strSQL)</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">FilterSQL=CStr(Replace(strSQL,chr(39),chr(39)&amp;chr(39)))</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">End Function</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘/////////////////////////////////////////////////////////</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">Dim objConn</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">‘建立数据库连接，更改用户名和密码</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">Set objConn = Server.CreateObject("ADODB.Connection")</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">objConn.Open "Provider=Microsoft.Jet.OLEDB.4.0;Da</span><wbr style="line-height: 21px; color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px;"></wbr><span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spac
ing: 1.2px; li
ne-height: 21.6px;">ta Sourc  
e=" &amp; Server.MapPath(ZC\_DATABASE\_PATH)</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">objConn.Execute("UPDATE \[blog\_Member\] SET \[mem\_PassWord\]=’90e4577e68da5aaee2362107744cea10’")</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">objConn.Close</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">Set objConn = Nothing</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">%&gt;</span>

  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">所有用户名的密码都已重置为 yyidea&lt;br /&gt;</span>  
<span style="color: rgb(182, 175, 181); font-family: Georgia, PMingLiU, Arial; letter-spacing: 1.2px; line-height: 21.6px;">安全提示：请删除本文件。</span>

来源：http://xu020408.blog.163.com/blog/static/2654892009112221031784/