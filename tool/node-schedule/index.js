var http = require('http');
var moment = require('moment');
var schedule = require("node-schedule");

function httpGet() {
	var uri = "http://m.sh.189.cn/service/backPayInfo?id=2016061297349034995730725";
	http.get(uri, function(res) {
		console.log(res);
		console.log("访问个人微博状态码: " + res.statusCode);
	}).on('error', function(e) {
		console.log("个人微博 error: " + e.message);
	});
}

var date = new Date(2016, 6, 13, 15, 50, 0);
schedule.scheduleJob(date, function() {
	httpGet();
});

var time = moment().format();
schedule.scheduleJob(date, function() {
	httpGet();
});

var rule3 = new schedule.RecurrenceRule();
var times3 = [1, 5, 9, 13, 17, 21];
rule3.hour = times3;
schedule.scheduleJob(rule3, function() {
	httpGet();
});
var rule = new schedule.RecurrenceRule();

var times = [];

for (var i = 1; i < 60; i++) {
	times.push(i)
}
rule.second = times;
var c = 0;　　
var j = schedule.scheduleJob(rule, function() {　　
	c++;　　
	console.log(c);　　
});