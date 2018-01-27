var nsq = require('nsqjs');
var moment = require('moment');

var w = new nsq.Writer('127.0.0.1', 4150);

w.connect();

/**
 * 推送日志到通用访问上
 * @param ip IP地址
 * @param level 日志等级
 * @param uuid UUID
 * @param service_name 微服务名称
 * @param body 具体内容
 */
exports.pushLog = function (ip, level, uuid, service_name, body) {
    var data = {
        'ip': ip,
        'level': level,
        'push_time': moment().format('x'),
        'uuid': 'uuid',
        'service_name': service_name,
        'body': body
    };
    w.publish('shtelecom-logs', JSON.stringify(data),function(err){
        if (err) { return console.error(err.message) }
        console.log('Message sent successfully');
        //w.close()
    });

};



