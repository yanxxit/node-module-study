var fs = require('fs');
var path = require('path');
var co = require("co")
var eventproxy = require("eventproxy")
var p = console;
//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.join('/Users/yanxiaoxiao/data/Project');//'/Users/yanxiaoxiao/data/Project';// path.join(__dirname, "../../")
var dir_list = [];
//调用文件遍历方法
// fileDisplay(filePath);

setTimeout(() => {
	console.log(dir_list);
}, 1000);
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
	//根据文件路径读取文件，返回文件列表
	fs.readdir(filePath, function (err, files) {
		if (err) return console.warn(err)
		files.forEach(function (filename) {
			//获取当前文件的绝对路径
			let filedir = path.join(filePath, filename);
			if (filedir.indexOf("node_modules") > -1) {//过滤
				return;
			}
			//根据文件路径获取文件信息，返回一个fs.Stats对象
			fs.stat(filedir, function (err, stats) {
				if (err) return console.warn('获取文件stats失败');
				if (stats.isFile()) {//是文件
					if (filedir.indexOf(".md") > -1) {
						dir_list.push(filedir)
					}
				}
				if (stats.isDirectory()) {//是文件夹
					fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
				}
			})
		});
	});
}

//读取目录
var readdir = function (filePath) {
	return new Promise(function (resolve, reject) {
		fs.readdir(filePath, function (err, files) {
			if (err) return reject(err)
			resolve(files);
		});
	});
}

var findAllFile = function (filePath) {
	var dir_list = [];
	return new Promise(function (resolve, reject) {

		co(function* () {

		});

		//根据文件路径读取文件，返回文件列表
		fs.readdir(filePath, function (err, files) {
			if (err) return console.warn(err)
			files.forEach(function (filename) {
				//获取当前文件的绝对路径
				let filedir = path.join(filePath, filename);
				if (filedir.indexOf("node_modules") > -1) {//过滤
					return;
				}

				let stats = fs.statSync(filedir)
				// console.log(",,-=------", stats)
				if (stats.isFile()) {//是文件
					if (filedir.indexOf(".md") > -1) {
						dir_list.push(filedir)
					}
				}
				// if (stats.isDirectory()) {//是文件夹
				// 	fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
				// }
			});
			resolve(dir_list);
		});
	});
}

// findAllFile(filePath).then(d => {
// 	p.log(d);
// })

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
