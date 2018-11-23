var topic = 'request_tasks_dev'; //集点券，做个通用的功能 request_tasks
var moment = require("moment");
var open = require('amqplib').connect('amqp://ccm:abc123@172.16.2.12:5672/ccm-host');

// Publisher
// open.then(function (conn) {
// 	return conn.createChannel();
// }).then(function (ch) {
// 	return ch.assertQueue(topic).then(function (ok) {

// 		let params = {
// 			url: 'http://baidu.com',
// 			method: 'Post',
// 			data: {
// 				a: 1,
// 				b: 2
// 			}
// 		}
// 		ch.sendToQueue(topic, new Buffer('111111111111111'));
// 		return ch.sendToQueue(topic, new Buffer(JSON.stringify(params)));
// 	});
// }).catch(console.warn);


open.then(function (conn) {
	process.once('SIGINT', function() { conn.close(); });
	return conn.createChannel();
}).then(function (ch) {
	return ch.assertQueue(topic).then(function (ok) {

		let params = {
			"uri":"http://127.0.0.1:7001/v2/mq/test",
			"method":"POST",
			"body":{"point":1,"order_no":"2018061392666639362"}
		}
		return ch.sendToQueue(topic, new Buffer(JSON.stringify(params)));
	});
}).catch(console.warn);
