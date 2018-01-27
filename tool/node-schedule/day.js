var http = require('http');
var moment = require('moment');
var schedule = require("node-schedule");

var rule = new schedule.RecurrenceRule();　
rule.dayOfWeek = [0, new schedule.Range(1, 6)];　
rule.hour = 19;　
rule.minute = 19;

var j = schedule.scheduleJob(rule, function() {　　　
	console.log("执行任务");
});