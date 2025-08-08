---
id: 442
title: 'ubuntu以root 身份运行终端'
date: '2016-12-07T07:20:55+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=442'
permalink: /2016/12/07/ubuntuyiroot-shenfenyunxingzhongduan-2/
categories:
    - log
tags:
    - root
    - ubuntu
    - 管理员
    - 身份运行终端
---

http://vestacp.com/

<span class="con">输入命令在终端输入命令提示：你需要以 root 身份执行此命令</span>

<span class="con"> Error: this script can only be executed by root</span>

---

```
1、用root账号登陆，或者su - root切换到root账号，前提是必须有root密码；2、unzip auto_fdisk.zip，解压zip包；3、ll    查看解压的包的目录，然后 cd auto_fdisk    进入这个目录，再ll  可以看到有个auto_fdisk.sh的脚本；4、chmod 755 auto_fdisk.sh  给这个脚本可执行权限；5、bash auto_fdisk.sh  执行这个脚本。
```

---

> ```
> sudo apt-get update
> ```
> 
> curl -O http://vestacp.com/pub/vst-install.sh
> 
> <span style="color: rgb(92, 84, 85); font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold;">bash vst-install.sh –nginx yes –phpfpm yes –apache no –vsftpd yes –proftpd no –exim no –dovecot no –spamassassin no –clamav no –named no –iptables no –fail2ban no –mysql no –postgresql yes –remi no –quota no –hostname zhaoweifeng –email i@zhaoweifeng.cn –password ange</span>