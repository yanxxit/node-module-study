var topic = 'request_tasks_dev';

var open = require('amqplib').connect('amqp://ccm:abc123@172.16.2.12:5672/ccm-host');

// Consumer
let deal = open.then(function (conn) {
	return conn.createChannel();
}).then(function (ch) {
	return ch.assertQueue(topic).then(function (ok) {

		return ch.consume(topic, function (msg) {
			if (msg !== null) {
				console.log(msg.content.toString());
				ch.ack(msg);
			}
			ch.close()
			return msg.content.toString()
		})
	});
})

deal.then(d => {
	console.log(">>>>>>>>>", d)
}).catch(d => {
	console.log(">>>>>>>>>>error", d);
});
