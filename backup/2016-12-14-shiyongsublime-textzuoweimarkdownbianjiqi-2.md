---
id: 453
title: '使用Sublime Text作为Markdown编辑器'
date: '2016-12-14T14:00:30+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=453'
permalink: /2016/12/14/shiyongsublime-textzuoweimarkdownbianjiqi-2/
categories:
    - log
tags:
    - install
    - markdown
    - 'Sublime Text'
---

 `Sublime Text 3`<span style="color: rgb(51, 51, 51); font-family: palatino, georgia, verdana, arial, sans-serif; font-size: 14.4px;">作为一个优秀的文本编辑器，拥有很多的扩展插件。我们可以利用这些插件为Sublime Text 增加扩展的功能，在这里我们借助两个插件来将Sublime Text 3变成一个</span><span style="color: rgb(51, 51, 51); font-family: palatino, georgia, verdana, arial, sans-serif; font-size: 14.4px;"> </span>`Markdown`<span style="color: rgb(51, 51, 51); font-family: palatino, georgia, verdana, arial, sans-serif; font-size: 14.4px;"> </span><span style="color: rgb(51, 51, 51); font-family: palatino, georgia, verdana, arial, sans-serif; font-size: 14.4px;">的编辑器。</span>

### 1. 安装Markdown Editing和Markdown Preview 插件

我们借助 `Package Control` 来安装插件(如果Sublime Text 3还没有安装`Package Control`，请参考这里：[Package Control Installation](https://sublime.wbond.net/))。点击 `Preferences` –&gt; 选择 `Package Control: intall`，然后再插件库中分别选择和安装`Markdown Editing`和`Markdown Preview`即可。然后重启Sublime Text 3，创建一个以`md`为后缀的文件，既可以开始编辑`Markdown`文件了。`Markdown Editing` 为提供了 `Markdown` 格式的高亮显示，如图：

![](http://images.cnitblog.com/blog2015/294941/201504/251326002036398.png)

### 2. 使用 Markdown Preview 生成 HTML

输入 `Shift` + `Ctrl` + `P`，输入 `Markdown Preview`，可以看到如下选项：

![](http://www.zhaoweifeng.cn/blog/upload/201612132201165682.png)

通过给出的选项，我们可以在浏览器中预览生成HTML的效果，也可以保存，或者导出生成的HTML文件。现在我们选择第一个选项：Preview in Browser ，然后再选择一个生成HTML的CSS模板，就可以在浏览器中看到生成的HTML了。

**自定义快捷键**

如果我们想要直接在浏览器中预览效果的话，可以自定义快捷键：点击 `Preferences` –&gt; 选择 `Key Bindings User`，输入：

```
<span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"keys"</span>: [<span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"alt+m"</span>], <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"command"</span>: <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"markdown_preview"</span>, <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"args"</span>: { <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"target"</span>: <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"browser"</span>} 
```

保存后，直接输入快捷键：`Alt` + `M` 就可以直接在浏览器中预览生成的HTML文件了。

**设置语法高亮和mathjax支持**

在`Preferences` -&gt; `Package Settings` -&gt; `Markdown Preview` -&gt; `Setting - User`中添加如下参数：

```
{     /*         Enable <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">or</span> <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">not</span> mathjax support.     */     <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"enable_mathjax"</span>: <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">true</span>,      /*
Enable <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">or</span> <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">not</span> highlight.js support <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">for</span> syntax highlighting.     */     <span class="hljs-string" style="margin: 0px; padding: 0px; color: rgb(163, 21, 21);">"enable_highlight"</span>: <span class="hljs-keyword" style="margin: 0px; padding: 0px; color: rgb(0, 0, 255);">true</span>, }
```

> 因为Sublime Text 3 开始不能直接修改 `Setting - Default` 中的设置了，我们需要在对应的 `Setting - User`选项里面对Default中的默认参数重写覆盖即可。

### 后记

原来使用的是 markdownPad2 这个编辑器也非常好用，不过它只能支持原始的 Markdown 解析，如果是对于 Table 这样的的扩展语法则需要使用付费的版本；Atom 编辑器也内置了(插件)对 markdown 的支持，不过由于其架构的原因，启动速度会比较慢，特别是对于硬盘不是SSD的机器来说，所以对于经常使用Sublime 作为主力编辑器(代码片段)，最后还是选择了使用 Sublime 作为 Markdown的编辑器。

### 参考&amp;进一步阅读

[http://www.mathjax.org](http://www.mathjax.org/)