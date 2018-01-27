var ccap = require('ccap-dev')({
    quality: 0.1,//图片质量
    fontSize: 48,//字体大小
    textLen: 4,//字数
    noiseType: 2,
    noiseSigma: 40// 2 10
});//Instantiated ccap class
var moment = require("moment");
var fs = require('fs')

var ary = ccap.get();
var txt = ary[0];
console.log("验证码为：" + txt);
var buf = ary[1];
var filename = "myQrcode_" + moment().format("YYYYMMDDHHmmss") + ".png";
fs.writeFile("./img/" + filename, buf, function (err) {
    if (!err) {
        console.log("生成成功");
    } else {
        console.log("生成失败" + err);
    }
});