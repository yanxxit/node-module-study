# [nodemailer](https://www.npmjs.com/package/nodemailer)

## 简介
> 邮件发送功能
参考：
http://www.jb51.net/article/95348.htm


## 安装方法
```
npm install nodemailer
```

## 使用方法
```
var nodemailer = require("nodemailer");
// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport("SMTP", {
  host: "smtp.qq.com", // 主机
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "xxxxxxxx@qq.com", // 账号
    pass: "xxxxxxxx" // 密码
  }
});
// 设置邮件内容
var mailOptions = {
    from: "Fred Foo <xxxxxxxx@qq.com>", // 发件地址
    to: "2838890xx@qq.com, minimixx@126.com", // 收件列表
    subject: "Hello world", // 标题
    html: "<b>thanks a for visiting!</b> 世界，你好！" // html 内容
  }
  // 发送邮件
smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }
  smtpTransport.close(); // 如果没用，关闭连接池
});
```
##  常见错误

### 常见错误1
```
{
  [AuthError: Invalid login - 454 Authentication failed, please open smtp flag first!]
  name: 'AuthError',
    data: '454 Authentication failed, please open smtp flag first!',
    stage: 'auth'
}
```

错误原因： 账号未设置该服务
解决方案: QQ邮箱 -> 设置 -> 帐户 -> 开启服务：POP3/SMTP服务

### 常见错误2
```
{
  [SenderError: Mail from command failed - 501 mail from address must be same as authorization user]
  name: 'SenderError',
    data: '501 mail from address must be same as authorization user',
    stage: 'mail'
}
```

错误原因： 发件账号与认证账号不同