var mongoose = require('./mongo_client');

//创建表结构
var DeviceSchema = new mongoose.Schema({
    itemid: String,
    name: String,
    author: String,
    address: {type: String, default: "XXX"},
    create: {type: Date, default: Date.now()},
    update: {type: Date, default: Date.now()},
});

DeviceSchema.index({itemid: -1}, {unique: true});//设置唯一 不能存入一样的数据

//数据对象 model
var Device = mongoose.model('Books', DeviceSchema);//表名

//插入
var deviceStore = new Device({
    itemid: "0002",
    name: '嘻嘻嘻书',
    author: '张三'
});
deviceStore.save(function (err, data) {
    if (err) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
});

//增删改查


//查询
Device.find({itemid: "0001"}, function (err, data) {
    console.log(err)
    console.log(data)
});

// Device.findById()  写入比查询慢