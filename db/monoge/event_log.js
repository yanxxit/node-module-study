var mongoose = require('mongoose');
var moment = require("moment")
var config = {
    db: 'mongodb://172.16.50.142/wechat-cache',//mongodb 地址 wap_dev是数据库名称
};

//链接
mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    } else {
        console.info('connect to %s ', config.db);

        //创建表结构
        const TableSchema = new mongoose.Schema({
            cookie: String,//cookie
            openid: String,//openid
            url: String,//请求链接
            from: String,//活动来源 那个项目，那个活动
            type: String,//类型
            remark: String,
            create_time: String,
        });

        //TableSchema.index({number: -1}, {unique: true});//设置唯一索引
        TableSchema.index({create_time: -1});//设置唯一索引

        //数据对象 model
        const Table = mongoose.model('event_log_table', TableSchema);//将表明和表结构对应，创建一个表


        //查询
        // Table.find({cookie: "bd65e35d4ddb1805ebe502a44ddf3510"}, function (err, data) {
        //     console.log(err)
        //     console.log(data)
        // });

        Table.where({
            from: "iphone8",
            create_time: {'$gte': '2017-09-14', '$lt': '2017-09-15'}
        }).count(function (err, count) {
            console.log(count)
        });
    }
});