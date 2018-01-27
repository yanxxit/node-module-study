var http = require('http'); // http 网路
var cheerio = require('cheerio'); // html 解析
var fs = require("fs"); // 流

/**
 * 1. 查询当前页面所有的链接
 * 2. 访问这些链接获取，对应链接的图片
 * 3. 获取完图片，下载图片
 */

// 设置被查询的目标网址
var queryHref = "http://www.mi.com/";
// 设置分页位置
var querySearch = 1;

var urls = [];

var GetImgEntity = {};
var hrefList = [];

GetImgEntity.getHref = function(href) {

	var pageData = "";
	var req = http.get(href, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			pageData += chunk;
		});

		res.on('end', function() {
			$ = cheerio.load(pageData);
			var html = $("a"); //获取全部的img
			console.log(html.length)

			for (var i = 0; i < html.length; i++) {
				try {
					var src = html[i].attribs.href;
					// 筛选部分广告，不是真的段子
					if (src.indexOf('http://') != -1) {
						hrefList.push(src.split('?')[0])
					}
				} catch (e) {}


			}
			console.log("a链接获取完毕！" + hrefList.length);
			console.log("链接总数量：" + hrefList.length);
			console.log(JSON.stringify(hrefList));
			if (hrefList.length > 0) {
				try {
					GetImgEntity.getHtml(hrefList.shift());
				} catch (e) {
					console.log('有bug继续');
				}

			} else {
				console.log("链接记录完毕下载完毕");
			}
		});
	});
};

/**
 * 根据url和参数获取分页内容
 * @param {String}： href
 */
GetImgEntity.getHtml = function(href) {
	var pageData = "";
	var req = http.get(href, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			pageData += chunk;
		});

		res.on('end', function() {
			$ = cheerio.load(pageData);
			var html = $("img"); //获取全部的img
			// console.log(html)

			for (var i = 0; i < html.length; i++) {
				var src = html[i].attribs.src;
				// 筛选部分广告，不是真的段子
				if (src.indexOf('http://') != -1) {
					urls.push(src.split('?')[0])
				}

			}
			console.log("图片链接获取完毕！" + urls.length);
			console.log("链接总数量：" + urls.length);
			console.log(JSON.stringify(urls));
			if (hrefList.length > 0) {
				try {
					GetImgEntity.getHtml(hrefList.shift());
				} catch (e) {
					console.log('有bug继续');
				}

			} else {
				console.log("链接记录完毕-----------------");
				console.log("链接总数量-------------------：" + urls.length);
				console.log(JSON.stringify(urls));

				GetImgEntity.downImg(urls.shift());
			}
		});
	});
};


/**
 * 下载图片
 * @param {String} imgurl：图片地址
 */
GetImgEntity.downImg = function(imgurl) {
	var narr = imgurl.replace(queryHref, "").split("/")

	http.get(imgurl, function(res) {
		var imgData = "";
		//一定要设置response的编码为binary否则会下载下来的图片打不开
		res.setEncoding("binary");

		res.on("data", function(chunk) {
			imgData += chunk;
		});

		res.on("end", function() {
			var savePath = "./xiaomi/" + "pic" + narr[narr.length - 2] + '_' + narr[narr.length - 1];
			fs.writeFile(savePath, imgData, "binary", function(err) {
				if (err) {
					console.log(err);
				} else {
					if (urls.length > 0) {
						GetImgEntity.downImg(urls.shift());
					} else {
						console.log("下载完毕");
					}
				}
			});
		});
	});
};

var pagemax = 100; // 获取10页的内容
function start() {
	console.log("开始获取图片连接");
	GetImgEntity.getHref(queryHref);
}

start();