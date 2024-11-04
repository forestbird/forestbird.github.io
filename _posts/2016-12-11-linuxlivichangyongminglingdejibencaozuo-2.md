---
id: 445
title: linux里vi常用命令的基本操作
date: '2016-12-11T01:13:40+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=445'
permalink: /2016/12/11/linuxlivichangyongminglingdejibencaozuo-2/
categories:
    - log
tags:
    - linux
    - vi
---

 <span style="color: rgb(51, 51, 51); font-family: "Microsoft YaHei", arial, "courier new", courier, 宋体, monospace; font-size: 16px; white-space: pre-wrap;">vi的基本操作 </span>

```
a) 进入vi <br></br><br></br>　　在系统提示符号输入vi及文件名称后，就进入vi全屏幕编辑画面： <br></br><br></br>　　　$ vi myfile <br></br><br></br>　　不过有一点要特别注意，就是您进入vi之后，是处于「命令行模式（command mode）」，您要切换到「插入模式（Insert mode）」才能够输入文字。初次使用vi的人都会想先用上下左右键移动光标，结果电脑一直哔哔叫，把自己气个半死，所以进入vi后，先不要乱动，转换到「插入模式（Insert mode）」再说吧！ <br></br><br></br>b) 切换至插入模式（Insert mode）编辑文件 <br></br><br></br>　　在「命令行模式（command mode）」下按一下字母「i」就可以进入「插入模式（Insert mode）」，这时候你就可以开始输入文字了。 <br></br><br></br>c) Insert 的切换 <br></br><br></br>　　您目前处于「插入模式（Insert mode）」，您就只能一直输入文字，如果您发现输错了字！想用光标键往回移动，将该字删除，就要先按一下「ESC」键转到「命令行模式（command mode）」再删除文字。 <br></br><br></br>d) 退出vi及保存文件 <br></br><br></br>　　在「命令行模式（command mode）」下，按一下「：」冒号键进入「Last line mode」，例如： <br></br><br></br>: w filename （输入 「w filename」将文章以指定的文件名filename保存） <br></br><br></br>: wq (输入「wq」，存盘并退出vi) <br></br><br></br>: q! (输入q!， 不存盘强制退出vi) <br></br><br></br>3、命令行模式（command mode）功能键 <br></br>1）. 插入模式 <br></br><br></br>　　按「i」切换进入插入模式「insert mode」，按“i”进入插入模式后是从光标当前位置开始输入文件； <br></br><br></br>　　按「a」进入插入模式后，是从目前光标所在位置的下一个位置开始输入文字； <br></br><br></br>　　按「o」进入插入模式后，是插入新的一行，从行首开始输入文字。 <br></br><br></br>2）. 从插入模式切换为命令行模式 <br></br><br></br>　　按「ESC」键。 <br></br><br></br>3）. 移动光标 <br></br><br></br>　　vi可以直接用键盘上的光标来上下左右移动，但正规的vi是用小写英文字母「h」、「j」、「k」、「l」，分别控制光标左、下、上、右移一格。 <br></br><br></br>　　按「ctrl」+「b」：屏幕往“后”移动一页。 <br></br><br></br>　　按「ctrl」+「f」：屏幕往“前”移动一页。 <br></br><br></br>　　按「ctrl」+「u」：屏幕往“后”移动半页。 <br></br><br></br>　　按「ctrl」+「d」：屏幕往“前”移动半页。 <br></br><br></br>　　按数字「0」：移到文章的开头。 <br></br><br></br>　　按「G」：移动到文章的最后。 <br></br><br></br>　　按「$」：移动到光标所在行的“行尾”。 <br></br><br></br>　　按「^」：移动到光标所在行的“行首” <br></br><br></br>　　按「w」：光标跳到下个字的开头 <br></br><br></br>　　按「e」：光标跳到下个字的字尾 <br></br><br></br>　　按「b」：光标回到上个字的开头 <br></br><br></br>　　按「#l」：光标移到该行的第#个位置，如：5l,56l。 <br></br><br></br>4）. 删除文字 <br></br><br></br>　　「x」：每按一次，删除光标所在位置的“后面”一个字符。 <br></br><br></br>　　「#x」：例如，「6x」表示删除光标所在位置的“后面”6个字符。 <br></br><br></br>　　「X」：大写的X，每按一次，删除光标所在位置的“前面”一个字符。 <br></br><br></br>　　「#X」：例如，「20X」表示删除光标所在位置的“前面”20个字符。 <br></br><br></br>　　「dd」：删除光标所在行。 <br></br><br></br>　　「#dd」：从光标所在行开始删除#行 <br></br><br></br>5）. 复制 <br></br><br></br>　　「yw」：将光标所在之处到字尾的字符复制到缓冲区中。 <br></br><br></br>　　「#yw」：复制#个字到缓冲区 <br></br><br></br>　　「yy」：复制光标所在行到缓冲区。 <br></br><br></br>　　「#yy」：例如，「6yy」表示拷贝从光标所在的该行“往下数”6行文字。 <br></br><br></br>　　「p」：将缓冲区内的字符贴到光标所在位置。注意：所有与“y”有关的复制命令都必须与“p”配合才能完成复制与粘贴功能。 <br></br><br></br>6）. 替换 <br></br><br></br>　　「r」：替换光标所在处的字符。 <br></br><br></br>　　「R」：替换光标所到之处的字符，直到按下「ESC」键为止。 <br></br><br></br>7）. 回复上一次操作 <br></br><br></br>　　「u」：如果您误执行一个命令，可以马上按下「u」，回到上一个操作。按多次“u”可以执行多次回复。 <br></br><br></br>8）. 更改 <br></br><br></br>　　「cw」：更改光标所在处的字到字尾处 <br></br><br></br>　　「c#w」：例如，「c3w」表示更改3个字 <br></br><br></br>9）. 跳至指定的行 <br></br><br></br>　　「ctrl」+「g」列出光标所在行的行号。 <br></br><br></br>　　「#G」：例如，「15G」，表示移动光标至文章的第15行行首。 <br></br><br></br>4、Last line mode下命令简介 <br></br>　　在使用「last line mode」之前，请记住先按「ESC」键确定您已经处于「command mode」下后，再按「：」冒号即可进入「last line mode」。 <br></br><br></br>A) 列出行号 <br></br><br></br>　「set nu」：输入「set nu」后，会在文件中的每一行前面列出行号。 <br></br><br></br>B) 跳到文件中的某一行 <br></br><br></br>　「#」：「#」号表示一个数字，在冒号后输入一个数字，再按回车键就会跳到该行了，如输入数字15，再回车，就会跳到文章的第15行。 <br></br><br></br>C) 查找字符 <br></br><br></br>　「/关键字」：先按「/」键，再输入您想寻找的字符，如果第一次找的关键字不是您想要的，可以一直按「n」会往后寻找到您要的关键字为止。 <br></br><br></br>　「?关键字」：先按「?」键，再输入您想寻找的字符，如果第一次找的关键字不是您想要的，可以一直按「n」会往前寻找到您要的关键字为止。 <br></br><br></br>D) 保存文件 <br></br><br></br>　「w」：在冒号输入字母「w」就可以将文件保存起来。 <br></br><br></br>E) 离开vi <br></br><br></br>　「q」：按「q」就是退出，如果无法离开vi，可以在「q」后跟一个「!」强制离开vi。 <br></br><br></br>　「qw」：一般建议离开时，搭配「w」一起使用，这样在退出的时候还可以保存文件。 <br></br><br></br>5、vi命令列表 <br></br>1、下表列出<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YkPjDvuhmvmHn1rHNBuWm30ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3En1nznWfznWc3" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none;" target="_blank">命令模式</a>下的一些键的功能： <br></br><br></br>h <br></br>左移光标一个字符 <br></br><br></br>l <br></br>右移光标一个字符 <br></br><br></br>k <br></br>光标上移一行 <br></br><br></br>j <br></br>光标下移一行 <br></br><br></br>^ <br></br>光标移动至行首 <br></br><br></br>0 <br></br>数字“0”，光标移至文章的开头 <br></br><br></br>G <br></br>光标移至文章的最后 <br></br><br></br>$ <br></br>光标移动至行尾 <br></br><br></br>Ctrl+f <br></br>向前翻屏 <br></br><br></br>Ctrl+b <br></br>向后翻屏 <br></br><br></br>Ctrl+d <br></br>向前翻半屏 <br></br><br></br>Ctrl+u <br></br>向后翻半屏 <br></br><br></br>i <br></br>在光标位置前插入字符 <br></br><br></br>a <b r=""></b>在光标所在位置的后一个字符开始增加 <br></br><br></br>o <br></br>插入新的一行，从行首开始输入 <br></br><br></br>ESC <br></br>从输入状态退至命令状态 <br></br><br></br>x <br></br>删除光标后面的字符 <br></br><br></br>#x <br></br>删除光标后的＃个字符 <br></br><br></br>X <br></br>(大写X)，删除光标前面的字符 <br></br><br></br>#X <br></br>删除光标前面的#个字符 <br></br><br></br>dd <br></br>删除光标所在的行 <br></br><br></br>#dd <br></br>删除从光标所在行数的#行 <br></br><br></br>yw <br></br>复制光标所在位置的一个字 <br></br><br></br>#yw <br></br>复制光标所在位置的#个字 <br></br><br></br>yy <br></br>复制光标所在位置的一行 <br></br><br></br>#yy <br></br>复制从光标所在行数的#行 <br></br><br></br>p <br></br>粘贴 <br></br><br></br>u <br></br>取消操作 <br></br><br></br>cw <br></br>更改光标所在位置的一个字 <br></br><br></br>#cw <br></br>更改光标所在位置的#个字 <br></br><br></br>2、下表列出行<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YkPjDvuhmvmHn1rHNBuWm30ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3En1nznWfznWc3" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none;" target="_blank">命令模式</a>下的一些指令 <br></br>w filename <br></br>储存正在编辑的文件为filename <br></br><br></br>wq filename <br></br>储存正在编辑的文件为filename，并退出vi <br></br><br></br>q! <br></br>放弃所有修改，退出vi <br></br><br></br>set nu <br></br>显示行号 <br></br><br></br>/或? <br></br>查找，在/后输入要查找的内容 <br></br><br></br>n <br></br>与/或?一起使用，如果查找的内容不是想要找的关键字，按n或向后（与/联用）或向前（与?联用）继续查找，直到找到为止。 <br></br><br></br>对于第一次用vi，有几点注意要提醒一下： <br></br>1、用vi打开文件后，是处于「命令行模式（command mode）」，您要切换到「插入模式（Insert mode）」才能够输入文字。切换方法：在「命令行模式（command mode）」下按一下字母「i」就可以进入「插入模式（Insert mode）」，这时候你就可以开始输入文字了。 <br></br>2、编辑好后，需从插入模式切换为命令行模式才能对文件进行保存，切换方法：按「ESC」键。 <br></br>3、保存并退出文件：在<a class="baidu-highlight" href="https://www.baidu.com/s?wd=%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YkPjDvuhmvmHn1rHNBuWm30ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3En1nznWfznWc3" rel="nofollow noopener noreferrer" style="color: rgb(63, 136, 191); text-decoration: none;" target="_blank">命令模式</a>下输入:wq即可！（别忘了wq前面的:）
```