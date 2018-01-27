/**
 * 创建redis对象
 * Created by Administrator on 2016/11/16.
 */
var redis = require('redis');
const config = require('../config');
var client = redis.createClient({
    host: config.debug ? '127.0.0.1' : '172.16.50.141',
    port: 6379,
    db: 5,//使用第几个数据库
    prefix: 'prefix:'//数据表前辍即schema 表前缀，可以通过这个区分表 默认在所有的地方都加的 ：需要加的，命名空间
});

client.on('error', function (err) {
    console.log('Error ' + err)
});

//设置键值 string
client.set('17721021494', '闫**', redis.print);
client.expire('17721021494', 100);//设置时间 每次启动 都会延长

//命名空间 通过：分割 使用的是键值对的方式，而不是列表的方式
client.set('wechat-mobile:17721021494', '闫**', redis.print);

//设置查询
client.get('17721021494', function (err, data) {
    console.log(data);
});

var NameSpace = 'giveflow';
var addUserName = function (key, value, cb) {
    var tkey = NameSpace + ":" + key;
    client.set(tkey, JSON.stringify(value), function (err, data) {
        client.expire(tkey, 1000);//设置时间 每次启动 都会延长
        cb(err, data);
    });
};

var getUserName = function (key, cb) {
    var tkey = NameSpace + ":" + key;
    client.get(tkey, function (err, data) {
        console.log(data);
        cb(err, data);
    });
};

addUserName('15806111230', '你好', function (err, data) {
    console.log(JSON.stringify(data));
});

var temp = {
    "cookie": {
        "httpOnly": true,
        "path": "/",
        "overwrite": true,
        "signed": true,
        "maxAge": 5184000000
    },
    "openid": "oKXUCj1MOddnp-sCpGi1J1dg3TyM"
};
addUserName('15806111230', temp, function (err, data) {
    console.log(JSON.stringify(data));
});

getUserName('15806111230', function (err, data) {
    console.log(err + ':' + JSON.stringify(data));
});

// 存入数据 json 要JSON.stringify() 转换一下

client.quit(function () {
    console.log('强制退出');
});