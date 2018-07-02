// var open = require('amqplib').connect('amqp://ccm:abc123@172.16.2.12:5672/ccm-host');
var topic = 'request_tasks';
// Consumer
function consumer(conn, cb) {
	var ok = conn.createChannel(on_open);

	function on_open(err, ch) {
		if (err != null) bail(err);
		ch.assertQueue(topic);
		ch.consume(topic, function (msg) {
			let data = {};
			if (msg !== null) {
				data = msg.content.toString()
				ch.ack(msg);
			}
			ch.close();
			cb(data)
		});
	}
}

require('amqplib/callback_api')
	.connect('amqp://ccm:abc123@172.16.2.12:5672/ccm-host', function (err, conn) {
		if (err != null) bail(err);
		consumer(conn, function (d) {
			console.log(d)
		});
	});
