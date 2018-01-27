# nodemailer
> 其实利用Node.JS实现邮件发送这个功能很多人都写过了，但是网上有的代码不能用，版本较老，所以想着写下自己摸索的方法来实现。现在分享给大家，感兴趣的朋友们可以一起学习学习。

## 第一步、配置篇
首先需要安装nodemailer库
```
npm install nodemailer//默认会安装最新的版本。
```
关于这个库的文档参见nodemailer
## 第二步、库的一些使用介绍
这个库使用方法很简单的。首先是要创建一个用于发送邮件的实例
```
var transporter = nodemailer.createTransport(transport[, defaults])
```
transport参数属性
属性太多了就只写一些关键的属性
     port:连接的端口号，一般就是465
     host:你用于发送邮件的服务器的host，比如163的host是stmp.163.com
     auth:这个就是和老版本不一样的地方了。新版本是用一个字面量存储用户名和密码。注意你的邮箱要开启stmp。
     user:用户名
     pass:密码。如果你的163设置了第三方登录密码的话这里要填你的第三方登录密码、
设置好了这些就可以使用啦~这里贴上我的设置
```js
var smtpConfig = {
 host: 'smtp.163.com',
 port: 465,
 auth: {
  user: 'xxxx',
  pass: 'xxxx'
 }
};
var transporter = nodemailer.createTransport(smtpConfig);
```
## 第三步、使用篇
现在我们可以使用以下函数进行发送邮件
transporter.sendMail(data[, callback])
data邮件内容
      from 邮件的发件人
      to 邮件的收件人
      subject 主题
      text 邮件是以文本的方式进行发送
      html 邮件内容是html网页效果
      attachments 附件。详细可以看官方文档
callback回调函数
      接受两个参数 err和info
err
如果失败了就可以打印这个对象看相关信息
info
可以看很多发送状态的信息
      messageID 会返回信息的messageID值，我也不太懂
      accepted 是一个数组，包括服务器接收的内容的地址
      rejected 意义和上面差不多，就是相反的意思
好了说完了我们就可以发送邮件了
```
var sendmail = function(html){
 var option = {
  from:"sender",
  to:"accepter",
  subject : '来自node的邮件',
  html : html
 }
 transporter.sendMail(option, function(error, response){
  if(error){
   console.log("fail: " + error);
  }else{
   console.log("success: " + response.messageID);
  }
 });
}
```

sendmail("邮件内容：<br/>这是来自nodemailer发送的邮件");