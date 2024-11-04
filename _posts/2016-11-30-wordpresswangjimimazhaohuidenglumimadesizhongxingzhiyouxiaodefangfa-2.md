---
id: 441
title: WordPress忘记密码找回登录密码的四种行之有效的方法
date: '2016-11-30T02:20:51+08:00'
author: forestbird
layout: post
guid: 'https://bird.work/?p=441'
permalink: /2016/11/30/wordpresswangjimimazhaohuidenglumimadesizhongxingzhiyouxiaodefangfa-2/
categories:
    - log
tags:
    - WordPress
    - wp
    - 密码
    - 忘记
    - 恢复
    - 找回
---

**一、最简单的找回Wordpress密码:后台用邮件直接找回**

1、忘记了Wordpress登录密码，直接使用Wordpress登录后台的“找回密码”，输入你的管理员邮箱，就会收到重置密码的邮件了，点击重置链接，设置新的密码即可。

[![Wordpress忘记密码后台直接找回](http://www.zhaoweifeng.cn/blog/upload/201611291022352856.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022352856.gif)

2、不过，使用后台直接找回密码有两个前提：一是你当初安装Wordpress时填写的是自己的邮箱，二是你的主机可以发送重置密码的邮件，二者缺一，则会导致找回密码失败。

<a name="toc-2" style="margin: 0px; padding: 0px; color: rgb(37, 131, 173); outline: none;"></a>**二、最直接的重置Wordpress密码:PhpMyAdmin修改MD5**

1、进入到主机的PhpMyAdmin管理界面，这是老版本的[![Wordpress忘记密码进入SQL地址](http://www.zhaoweifeng.cn/blog/upload/201611291022421777.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022391367.gif)

2、注意现在新购买的Godaddy主机都是采用Cpanel面板了，数据库中有PhpMyAdmin管理链接。

[![Wordpress忘记密码查看Cpanel地址](http://www.zhaoweifeng.cn/blog/upload/201611291022427257.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022427257.gif)

3、进入到PhpMyAdmin后，点击wp\_users这个表。

[![Wordpress忘记密码找到表](http://www.zhaoweifeng.cn/blog/upload/201611291022421784.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022421784.gif)

4、再点击修改用户参数。（注意：user\_login是登录名，默认的是admin，如果你这之前改过用户名，则显示的是其它的）。

[![Wordpress忘记密码编辑参数](http://www.zhaoweifeng.cn/blog/upload/201611291022424616.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022424616.gif)

5、在这里将user\_pass值改成：5d41402abc4b2a76b9719d911017c592，执行，保存。

[![Wordpress忘记密码执行保存](http://www.zhaoweifeng.cn/blog/upload/201611291022421708.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022421708.gif)

6、完成后，你就可以使用密码：hello 来登录你的Wordpress了，登录到Wordpress后台后要记得马上修改密码。

[![Wordpress忘记密码使用新的登录](http://www.zhaoweifeng.cn/blog/upload/201611291022425543.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022425543.gif)

<a name="toc-3" style="margin: 0px; padding: 0px; color: rgb(37, 131, 173); outline: none;"></a>**三、最快捷的修改Wordpress密码:执行SQL命令**

1、进入到PhpMyAdmin的SQL执行命令页面，执行以下命令：

```
 update wp_users set user_pass=md5("123456") where user_login='admin'; 
```

2、123456是你的Wordpress新密码，admin是管理员账号。执行完了命令后，你就可以用新的密码来登录Wordpress了。

[![Wordpress忘记密码执行SQL命令](http://www.zhaoweifeng.cn/blog/upload/201611291022425754.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022425754.gif)

<a name="toc-4" style="margin: 0px; padding: 0px; color: rgb(37, 131, 173); outline: none;"></a>**四、最方便的设置Wordpress新密码:用PHP文件重置密码**

PS：**2014年3月7日更新，**感谢 [arefly.com](https://www.arefly.com/change-wordpress-password-php/) 博主提供了新的重置Wordpress密码的PHP文件：[WordPress恢复密码PHP文件下载地址](https://www.freehao123.com/dl-wordpress-password-php/)。将此文件上传到你的网站根目录，然后输入所有关于你站点的MYSQL信息和需要更改的WordPress帐号及密码，点击“重新设定密码”就行了。该PHP工具在使用后会尝试自动删除，但是如果删除失败，记得自己删除这个文件来确保网站的安全。

[![新的重置Wordpress密码的PHP文件](http://www.zhaoweifeng.cn/blog/upload/201611291022433715.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022433715.gif)

1、如果你没有权限进入数据库管理系统，或者不想去那么麻烦地使用PhpMyAdmin，则可以试试用PHP文件重置Wordpress密码的方法。

2、将以下代码复制，保存为wppw.php文件。（代码来自：<https://www.yiduqiang.com/wordpress-password-changes.html>）

```
 <?php<br style="margin: 0px; padding: 0px;"></br>/*你的数据库服务器地址，一般保持默认*/<br style="margin: 0px; padding: 0px;"></br>$servername = "localhost:3306";<br style="margin: 0px; padding: 0px;"></br>/*数据库用户名*/<br style="margin: 0px; padding: 0px;"></br>$phpMyadminUser = "root";<br style="margin: 0px; padding: 0px;"></br>/*数据库密码*/<br style="margin: 0px; padding: 0px;"></br>$phpMyadminKey = "yiduqiang";<br style="margin: 0px; padding: 0px;"></br>/*数据库名称*/<br style="margin: 0px; padding: 0px;"></br>$phpMyadminName = "test";<br style="margin: 0px; padding: 0px;"></br>/*wordpress数据表格前缀*/<br style="margin: 0px; padding: 0px;"></br>$QZ = "wp_";<br style="margin: 0px; padding: 0px;"></br>/*你要设置的wordpress新密码*/<br style="margin: 0px; padding: 0px;"></br>$NewKey = "yiduqiang";<br style="margin: 0px; padding: 0px;"></br>/*你要设置新密码的用户名*/<br style="margin: 0px; padding: 0px;"></br>$wordpress_User = "yiduqiang";<br style="margin: 0px; padding: 0px;"></br>?><br style="margin: 0px; padding: 0px;"></br></br><html xmlns="https://www.w3.org/1999/xhtml"><br style="margin: 0px; padding: 0px;"></br><head><br style="margin: 0px; padding: 0px;"></br><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><br style="margin: 0px; padding: 0px;"></br><title>wordpress密码找回工具</title><br style="margin: 0px; padding: 0px;"></br></head><br style="margin: 0px; padding: 0px;"></br><body><br style="margin: 0px; padding: 0px;"></br><?php<br style="margin: 0px; padding: 0px;"></br>error_reporting(0);<br style="margin: 0px; padding: 0px;"></br>if(!mysql_connect($servername,$phpMyadminUser,$phpMyadminKey))<br style="margin: 0px; padding: 0px;"></br>{<br style="margin: 0px; padding: 0px;"></br>    echo "对不起，数据库链接出错。<br />";<br style="margin: 0px; padding: 0px;"></br>}<br style="margin: 0px; padding: 0px;"></br>else<br style="margin: 0px; padding: 0px;"></br>{<br style="margin: 0px; padding: 0px;"></br>    echo "数据库链接成功。<br />";<br style="margin: 0px; padding: 0px;"></br>    mysql_select_db($phpMyadminName,mysql_connect($servername,$phpMyadminUser,$phpMyadminKey));<br style="margin: 0px; padding: 0px;"></br>    if (!mysql_query("update ".$QZ."users set user_pass='".md5($NewKey)."' where user_login='".$wordpress_User."'"))<br style="margin: 0px; padding: 0px;"></br>    {<br style="margin: 0px; padding: 0px;"></br>        echo "对不起，修改密码失败。";<br style="margin: 0px; padding: 0px;"></br>    }<br style="margin: 0px; padding: 0px;"></br>    else<br style="margin: 0px; padding: 0px;"></br>    {<br style="margin: 0px; padding: 0px;"></br>        echo "修改密码成功。";<br style="margin: 0px; padding: 0px;"></br>    }<br style="margin: 0px; padding: 0px;"></br>}<br style="margin: 0px; padding: 0px;"></br>?><br style="margin: 0px; padding: 0px;"></br></body><br style="margin: 0px; padding: 0px;"></br></html> 
```

3、或者直接下载我已经保存好的wppw.php文件：[WordPress重置密码PHP文件](https://www.freehao123.com/dl-wordpress-php/)。打开wppw.php文件，将数据库用户名、密码、名称等改成你的，还有WP的新密码。

[![Wordpress忘记密码修改连接数据库](http://www.zhaoweifeng.cn/blog/upload/201611291022446206.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022446206.gif)

4、特别注意：有些主机的数据库Host地址可能不是默认的Localhost，例如Godaddy的主机就是一连串的URL地址。

[![Wordpress忘记密码注意数据库主机](http://www.zhaoweifeng.cn/blog/upload/201611291022450481.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022450481.gif)

4、将wppw.php文件用FTP的方式上传到你的网站的根目录下。

[![Wordpress忘记密码上传到根目录](http://www.zhaoweifeng.cn/blog/upload/201611291022455136.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022455136.gif)

5、然后打开：https://域名/wppw.php，页面会提示你密码修改成功。如果有提示你数据库连接错误，请返回仔细检查wppw.php中的数据库部分信息有没有错误。

[![Wordpress忘记密码修改成功](http://www.zhaoweifeng.cn/blog/upload/201611291022475722.gif)](http://www.zhaoweifeng.cn/blog/upload/201611291022475722.gif)

<a name="toc-5" style="margin: 0px; padding: 0px; color: rgb(37, 131, 173); outline: none;"></a>**五、Wordpress找回密码方法小结**

1、使用Wordpress自带的找回密码功能是最简单最方便的，如果主机不支持php mail()函数，可以使用SMTP来代替，方法：[WordPress评论回复邮件  
通知](https://www.freehao123.com/wordpress-pinglun-huifu/)。

2、Wordpress上传重置密码的PHP文件在使用完了之后要记得删除，以免出现安全隐患。在使用PhpMyAdmin执行SQL命令前要记得备份数据，以免失败导致数据丢失。

</body></html>