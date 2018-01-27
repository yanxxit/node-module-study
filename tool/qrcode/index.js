var qrcode = require("qrcode");//版本0.9.0
var moment = require("moment");
var fs = require('fs')
//暂时未成功，在其他平台进行尝试
//有些库只适合在ubuntu 下

var filename = "myQrcode_" + moment().format("YYYYMMDDHHmmss") + ".png";
qrcode.toDataURL("http://github.yxxit.com", function (err, urldata) {
    var base64Data = urldata.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("./img/" + filename, dataBuffer, function (err) {
        if (!err) {
            console.log("生成成功");
        } else {
            console.log("生成失败" + err);
        }
    });
});