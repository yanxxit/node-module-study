var CatchClass = require('./CatchClass');
var utility = require('utility');
var moment = require('moment');
var EventProxy = require("eventproxy")

var config = {
    name: 'redis-queue',
    info: '队列信息备注',
    maxage: 60,
    max: 200
};


var getQueue = function (cookie, cb) {
    var ep = new EventProxy();
    var client = new CatchClass(config.name, config.info, config.maxage);
    client.getCache(cookie, function (data) {
        if (data == "ok") {
            cb({status: 200, data: 'ok', info: cookie + "已经在队列中，可以继续访问！--------"});
        } else {
            client.getKeyCacheCount(config.name, function (count) {
                console.log("---- 当前在线数量：" + count)
                if (count < config.max) {//限制数量
                    client.addCache(cookie, "ok", function (err, data) {
                        cb({status: 200, data: 'ok', info: cookie + "已经添加到队列中，可以继续访问！"});
                    })
                } else {
                    cb({status: 200, data: 'ok', info: cookie + "抱歉您当前访问人数超出上线！"});
                }
            })
        }
    });
};

var test_queue = function () {
    var cookie = moment().format("YYYYMMDD") + utility.randomString(17, "1234567890");
    getQueue(cookie, function (data) {
        console.log(data)
    });
}


//批量访问
for (var i = 0; i < 300; i++) {
    test_queue()
}


//1. 请求入参记录
//2. url
//3. time
//4. status

//功能
//1. 存储
//2. 拉取数据，拉取数据的同时，删除查询到的数据
//3. 注意查询按顺序拉取数据

// 最好使用mongodb


//1. 到一定数量无法参与 跳转到等待页面
//2. 下次再次访问如果有数据，可以继续访问
//3. 时间可以配置
//4. 队列名称方便配置

// client.getKeyCacheCount("*redis-queue*", function (data) {
//     console.log(JSON.stringify(data))
// })


// //查询
// client.getCache(deviceId, function (data) {
//     console.log(JSON.stringify(data))
// });

//删除
// client.delCache(deviceId, function (data) {
//     console.log(JSON.stringify(data))
// });

//
// client.getMoreCache("*QueryBaseInfoCatch*", function (data) {
//     console.log(JSON.stringify(data))
// })