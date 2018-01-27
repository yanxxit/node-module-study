var mongoose = require('mongoose');
var config = {
    db: 'mongodb://127.0.0.1/wechat-mongo',//mongodb 地址 wap_dev是数据库名称
};

//链接
mongoose.connect(config.db, function (err) {
    if (err) {
        console.log("链接" + config.db + "mongodb数据库链接失败");
        process.exit(1);
    } else {
        console.log("链接" + config.db + "mongodb数据库链接成功")
    }
});

module.exports = mongoose;
