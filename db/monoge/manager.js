var mongoose = require('mongoose');
var config = {
    db: 'mongodb://127.0.0.1/wechat-mongo',//mongodb 地址 wap_dev是数据库名称
};

//链接
mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    } else {
        console.info('connect to %s ', config.db);
        var Schema = mongoose.Schema;

        var LuserSchema = new Schema({
            mobile: String,
            password: String,
            apiname: String,
            reqtime: {type: Date, default: Date.now()},
            isOk: Number
        });

        LuserSchema.index({reqtime: -1}, {unique: true});

        mongoose.model('Luser', LuserSchema);


        var Luser = mongoose.model('Luser');

        //插入
        var userStore = new Luser({
            mobile: "15806111230",
            password: '123456',
            apiname: "abc",
            reqtime: Date.now(),
            isOk: 0
        });
        userStore.save();

        //增删改查


        //查询
        Luser.find({mobile: "17721021494"}, function (err, data) {
            console.log(err)
            console.log(data)
        });
    }
});