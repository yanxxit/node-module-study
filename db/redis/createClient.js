/**
 * 创建redis对象
 * Created by Administrator on 2016/11/16.
 */
var redis = require('redis');
var client = redis.createClient();
//redis.expire(key, expiration)

client.on('error', function (err) {
    console.log('Error ' + err)
});

//function 默认 第一个为error 信息 第二个为返回数据
client.select(3, function (err, data) {
    console.log('选择库：' + data);
});

//设置键值 string
client.set('string key', 'string val', redis.print);
client.expire('string key', 100);//设置时间 每次启动 都会延长

//创建hash 键值対  key是唯一的 如果存在，将不会新加，但是，value值将会更新
client.hset('hash key', 'hashtest 1', 'some value', redis.print);
client.hset(['hash key', 'hashtest 3', 'some other value2'], redis.print);
client.expire('hash key', 50);//设置时间
client.lpush('hash key', 'hashtest 1', 'some value updata');
//查询hash key 所有的键，但是没有给值，如何取到值呢？
client.hkeys('hash key', function (err, data) {
    console.log('查看键值对长度：' + data.length + ' 查询结果：');
    console.dir(data);
    data.forEach(function (item, i) {
        console.log('  ' + i + ' , ' + item)
    });
});

//hmset
//依然是键值对的方式，只不过添加值的方式有些不同
client.hmset('hmset', ['test keys 1', 'test val 1', 'test keys 2', 'test val 2'], function (err, res) {
    console.log(' 添加记录：' + res)
});

client.hgetall('hmset', function (err, data) {
    console.log('hgetall-查看键值对长度：' + data.length + ' 查询结果：');
    console.dir(data);
    console.log('取值：test keys 1=' + data['test keys 1'])
});

client.quit(function () {
    console.log('强制退出');
});