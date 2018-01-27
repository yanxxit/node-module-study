var redis = require('redis');
var client = redis.createClient();
var set_size = 20;
client.on('error', function (err) {
    console.log('Error ' + err)
});

//function 默认 第一个为error 信息 第二个为返回数据
client.select(3, function (err, data) {
    console.log('选择库：' + data);
});

client.sadd("bigset", "a member");
client.sadd("bigset", "another member");

while (set_size > 0) {
    client.sadd("bigset", "member " + set_size);
    set_size -= 1;
}

// multi chain with an individual callback
client.multi()
    .scard("bigset")
    .smembers("bigset")
    .keys("*", function (err, replies) {
        // NOTE: code in this callback is NOT atomic
        // this only happens after the the .exec call finishes.
        console.log('key(*)----')
        client.mget(replies, redis.print);
    })
    .dbsize()
    .exec(function (err, replies) {
        console.log("MULTI got " + replies.length + " replies");
        replies.forEach(function (reply, index) {
            console.log(" || Reply " + index + ": " + reply.toString());
        });
    });