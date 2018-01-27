/**
 * 创建redis对象
 * Created by Administrator on 2016/11/16.
 */
var _ = require("underscore")._;
var logger = {
    info: function (data) {
        console.log(data)
    }
};
var RedisClient = require('./RedisClientTool');
const fs = require('fs');
var xlsx = require('node-xlsx');
var EventProxy = require("eventproxy")

var fmt = function (data, index) {
    console.log(JSON.stringify(data) + '-----' + index);
    fs.appendFile('data.txt', data + ' \n', function () {
        console.log('-----' + index);
    });
};


class CatchClass {
    constructor(nameSpace, info, maxage) {
        this.nameSpace = nameSpace || 'common';//命名空间
        this.info = info || '获取缓存数据';//备注信息
        this.maxage = maxage || 24 * 60 * 60;//设置失效时间 单位秒
    }

    //添加缓存
    addCache(key, value, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.set(tkey, JSON.stringify(value), function (err, data) {
            logger.info(that.info + '：' + key + ' 缓存信息：' + JSON.stringify(value));
            RedisClient.expire(tkey, that.maxage);//设置失效时间
            cb(err, data);
        })


    }

    //查询缓存
    getCache(key, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.get(tkey, function (err, data) {
            console.log(that.info + '：' + key + ' 缓存信息：' + JSON.stringify(data));
            if (err || _.isEmpty(data)) {
                cb('');
            } else {
                cb(JSON.parse(data));
            }
        });
    }

    delCache(key, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.del(tkey, function (err, data) {
            console.log(that.info + '：' + key + ' 缓存信息：' + JSON.stringify(data));
            if (err || _.isEmpty(data)) {
                cb('');
            } else {
                cb(JSON.parse(data));
            }
        });
    }

    getExcelCache(key, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.keys(key, function (err, data) {
            console.log("匹配key值：" + JSON.stringify(data))
            if (err) {
                console.log(err)
            } else {
                var ep = new EventProxy();
                ep.after('got_file', 100, function (resData) {
                    var list = [];
                    resData.forEach(function (m, i) {
                        fmt(m.data, i);
                        if (!m.err) {
                            try {
                                var body = JSON.parse(m.data)
                                list.push(body.data)
                            } catch (e) {

                            }
                        }
                    });
                    console.log("获取数量" + list.length)
                    var lists = [];
                    for (var i in list) {
                        var arr = [];
                        var value = list[i];
                        for (var j in value) {
                            arr.push(value[j]);
                        }
                        lists.push(arr);
                    }

                    var buffer = xlsx.build([
                        {
                            name: 'sheet1',
                            data: lists
                        }
                    ]);

                    try {
                        //将文件内容插入新的文件中
                        fs.writeFileSync('data.xlsx', buffer, {'flag': 'w'});
                    } catch (e) {

                    }

                });
                for (var i = 0; i < 100; i++) {
                    key = data[i];
                    key = key.substring("telecom-common:".length);
                    RedisClient.get(key, function (err, body) {
                        //console.log(that.info + '：' + key + ' 缓存信息：' + JSON.stringify(body));
                        ep.emit("got_file", {err: err, data: body});
                    });
                }
            }
        })
    }

    getMoreCache(key, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.keys(key, function (err, data) {
            console.log("匹配key值：" + key + JSON.stringify(data))
            for (var i = 0; i < data.length; i++) {
                key = data[i];
                key = key.substring("telecom-common:".length);
                RedisClient.get(key, function (err, body) {
                    console.log(that.info + '：' + key + ' 缓存信息：' + JSON.stringify(body));
                });
            }
        })
    }
}

module.exports = CatchClass;

