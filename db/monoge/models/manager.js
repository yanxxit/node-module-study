var mongoose = require('./mongo_client');

//创建表结构
var LuserSchema = new mongoose.Schema({
    mobile: String,
    password: String,
    apiname: String,
    reqtime: {type: Date, default: Date.now()},
    isOk: Number
});

LuserSchema.index({reqtime: -1}, {unique: true});

//数据对象 model
var Luser = mongoose.model('Luser', LuserSchema);

//插入
var userStore = new Luser({
    mobile: "17721021494",
    password: '123456',
    apiname: "abc",
    reqtime: Date.now(),
    isOk: 0
});
userStore.save();

//增删改查


//查询
// Luser.find({mobile: "17721021494"}, function (err, data) {
//     console.log(err)
//     console.log(data)
// });

Luser.findOne({mobile: "17721021494"}, function (err, data) {
    console.log(err)
    console.log(data)
});

//删除
Luser.remove({_id: '598955a7c5cd00262c2c54c1'}, function (err) {
    if (err) return handleError(err);
    // removed!
});

//修改 自动更新
Luser.update({
        _id: "598955b747f3923950e0ba0e",
        mobile: '17721021494',
        password: '12345611',
        apiname: 'sssssssssssssssssss',
        isOk: 0,
        __v: 0,
        reqtime: Date.now(),
    },
    function (err, data) {
        console.log(err)
        console.log(data)
    });