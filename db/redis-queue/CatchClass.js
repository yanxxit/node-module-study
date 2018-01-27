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

    getKeyCacheCount(key, cb) {
        var tkey = this.nameSpace + ":" + key;
        var that = this;
        RedisClient.keys("*" + key + "*", function (err, data) {
            cb(data.length)
        })
    }

}

module.exports = CatchClass;

