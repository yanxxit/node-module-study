const RedisClass = require('./redis_model');
const p = console;
let config = {
    nameSpace: 'dxl-limt-brush:',
    info: '幸福专列投票防刷',
    maxage: 60 * 60 * 24,//过期时间
    redis: {
        db: 0,//使用第几个数据库
    }
};
let client = new RedisClass.RedisModel(config);
//存储和查询是OK的 
let key = "111111111111111"
client.getCache(key, (data) => {
    if (!data) {
        client.addCache(key, "ok", (err) => {
            p.log(err)
        })
        p.log("可以参与")
    } else {
        p.log("已经有缓存了")
    }
})