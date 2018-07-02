var topic = 'request_tasks'; //集点券，做个通用的功能 request_tasks
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
	return conn.createChannel();
}).then(function (ch) {
	return ch.assertQueue(topic).then(function (ok) {

		let params = {
			url: 'http://baidu.com',
			method: 'Post',
			data: {
				a: 1,
				b: 2
			}
		}

		setInterval(function () {
			params.created = moment().format("YYYY-MM-DD HH:mm:ss")
			ch.sendToQueue(topic, new Buffer(JSON.stringify(params)))
		}, 1000);
		ch.sendToQueue(topic, new Buffer('111111111111111'));
		return ch.sendToQueue(topic, new Buffer(JSON.stringify(params)));
	});
}).catch(console.warn);
