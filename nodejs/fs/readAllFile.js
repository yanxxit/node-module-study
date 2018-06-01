var fs = require('fs');
var path = require('path');
var co = require("co")
var eventproxy = require("eventproxy")
var p = console;

/**
 * 读取某目录下全部的文件信息
 * @param {*} cb 
 */
var readRecordCallback = function (filePath, cb) {
	var dir_list = [];
	var ep = new eventproxy();

	ep.bind("stat", function (filedir) {
		fs.stat(filedir, function (err, stats) {
			if (err) return console.warn('获取文件stats失败');
			if (stats.isFile()) {//是文件
				if (filedir.indexOf(".md") > -1) {
					dir_list.push(filedir)
				}
			}
			if (stats.isDirectory()) {//是文件夹
				ep.emit("readdir", filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件\
			}
		})
	});

	ep.bind("readdir", function (filePath) {
		fs.readdir(filePath, function (err, files) {
			files.forEach(function (filename) {
				let filedir = path.join(filePath, filename);
				if (filedir.indexOf("node_modules") > -1) {//过滤
					return;
				}
				ep.emit("stat", filedir);
			});
		})
	});
	ep.emit("readdir", filePath);//递归，如果是文件夹，就继续遍历该文件夹下面的文件\

	//监听文件部分，数据不在读取，就返回信息
	let oldNum = 0;
	let newNum = 0;
	let count = 0;
	//处理的速度，远远高于 监听的时间，
	let eventLen = setInterval(() => {
		oldNum = newNum;
		newNum = dir_list.length;
		console.log("处理数量：", dir_list.length);
		if (newNum == oldNum) {
			count++;
			if (count == 10) {
				console.log("处理结束：返回总数量", dir_list.length);
				clearInterval(eventLen)
				cb(null, dir_list);
			}
		}
	}, 1);
}

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.join('/Users/yanxiaoxiao/data/Project');
console.time("record");
readRecordCallback(filePath, function (err, data) {
	console.timeEnd("record");
});
