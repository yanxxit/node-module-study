var CatchClass = require('./CatchClass');

var client = new CatchClass('QueryBaseInfoCatch', '获取设备基本信息');
//var deviceId = "17721021494";
////查询
//client.getCache(deviceId, function (data) {
//    console.log(JSON.stringify(data))
//});

//删除
// client.delCache(deviceId, function (data) {
//     console.log(JSON.stringify(data))
// });


 client.getMoreCache("*QueryBaseInfoCatch*", function (data) {
     console.log(JSON.stringify(data))
 })