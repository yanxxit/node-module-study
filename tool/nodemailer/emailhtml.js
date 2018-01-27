var https = require('https');
var fs = require('fs');
var nodemailer = require('nodemailer');
var schedule = require('node-schedule');
var config = {
    time: '2017-01-30', //日期格式必须是这样
    your_mail: '15806111230@139.com', //你自己的邮箱，我这里用的是163邮箱，如果你要改其他类型的邮箱的话，那请你修改transporter里的服务器信息
    mail_pass: 'qinfen86' //放心写吧
};

var transporter = nodemailer.createTransport({
    host: "smtp.139.com", //邮箱的服务器地址，如果你要换其他类型邮箱（如QQ）的话，你要去找他们对应的服务器，
    secureConnection: true,
    port: 25, //端口，这些都是163给定的，自己到网上查163邮箱的服务器信息
    auth: {
        user: config.your_mail, //邮箱账号
        pass: config.mail_pass, //邮箱密码
    }
});
var html =
    "<html><head>"
    + '<meta http-equiv="content-type" content="text/html; charset=utf-8">'
    + '</head><body>'
    + "<div><a href='http://m.sh.189.cn/html/more/index.html'>更多活动</a></div>"
    + "<div><img src='http://m.sh.189.cn/html/more/img/new-banner.png'></div>"
    + '</body></html>';
//邮件信息
var mailOptions = {
    from: config.your_mail, // 发件邮箱地址
    to: 'yanxxit@163.com,yanxiaoxiao@mallog.cn', //config.your_mail, // 收件邮箱地址，可以和发件邮箱一样
    subject: '测试邮件模块', // 邮件标题
    text: '有票啦\n' + '时间是' + '2017-01-30' + ',\n出发时间:2017-02-02',
    html: html
};
console.log('准备发送邮件。。。');
// 发邮件部分
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('邮件发送成功: ' + info.response);
});