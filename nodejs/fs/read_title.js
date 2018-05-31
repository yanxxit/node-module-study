var fs = require("fs")
var path = require("path")
var co = require("co")
var p = console;

let root_dir = path.join('/Users/yanxiaoxiao/data/Project')
p.log('根目录：', root_dir);

/**
 * 获取标题
 * @param {string} fileName 文件名称
 * @returns {object} 返回 {title:'标题',dir:'文件路径'}
 */
var getTitle = function (fileName) {
	return new Promise(function (resolve, reject) {
		// let one = path.join(root_dir, fileName);
		let list2 = fileName.split("/");
		let title = list2[list2.length - 1].split('.md')[0];
		fs.readFile(fileName, 'utf8', function (err, data) {
			// if (err) reject(err)
			let list = data.split("\n");

			for (let i = 0; i < list.length; i++) {
				if (list[i].indexOf("#") > -1 && list[i].split("#").length == 2) {
					title = list[i].split("#")[1];
					break;
				}
			}
			resolve({ title:title.trim(), dir: fileName.split(root_dir)[1] })
		});
	});
}

/**
 * 遍历所有文件
 * @param {*} filePath 
 */
function fileDisplay(filePath) {
	//根据文件路径读取文件，返回文件列表
	fs.readdir(filePath, function (err, files) {
		if (err) return p.warn(err)
		files.forEach(function (filename) {
			//获取当前文件的绝对路径
			let filedir = path.join(filePath, filename);
			if (filedir.indexOf("node_modules") > -1) {//过滤
				return;
			}
			//根据文件路径获取文件信息，返回一个fs.Stats对象
			fs.stat(filedir, function (err, stats) {
				if (err) return p.warn('获取文件stats失败');
				if (stats.isFile()) {//是文件
					if (filedir.indexOf(".md") > -1) {
						co(function* () {
							// p.log(stats);
							let { title, dir } = yield getTitle(filedir)
							// p.log('文件名称及标题：', dir, title, stats.birthtime, stats.size + '字节（b）')
							let kong = "";
							dir.split("/").forEach(function(){
								kong+="  "
							});
							p.log(`${kong}* [${title}](${dir})`);
						});
					}
				}
				if (stats.isDirectory()) {//是文件夹
					fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
				}
			})
		});
	});
}
fileDisplay(root_dir);

//1. 实现所有文件的遍历
//2. 实现识别文件标题的读取
//3. 是否可以识别文件创建时间
