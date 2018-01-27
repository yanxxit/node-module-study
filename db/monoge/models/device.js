var mongoose = require('./mongo_client');

//创建表结构
var DeviceSchema = new mongoose.Schema({
    mobile: String,
    password: String,
    apiname: String,
    reqtime: {type: Date, default: Date.now()}
});

DeviceSchema.index({reqtime: -1}, {unique: true});

//数据对象 model
var Device = mongoose.model('Device', DeviceSchema);

//插入
var deviceStore = new Device({
    mobile: "17721021494",
    password: '123456',
    reqtime: Date.now()
});
deviceStore.save();

//增删改查


//查询
Device.find({mobile: "17721021494"}, function (err, data) {
    console.log(err)
    console.log(data)
});

// Device.findById()