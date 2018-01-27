var http = require('http'); // http 网路
var cheerio = require('cheerio'); // html 解析
var fs = require("fs"); // 流

// 设置被查询的目标网址
var queryHref = "http://m.sh.189.cn/html/more/index.html";
// 设置分页位置
var querySearch = 1;

var urls = [];

var GetImgEntity = {};


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
                var src = 'http://m.sh.189.cn/html/more/' + html[i].attribs.src;
                // 筛选部分广告，不是真的段子
                urls.push(src)
            }
            console.log("图片链接获取完毕！" + urls.length);
            console.log("链接总数量：" + urls.length);
            console.log(JSON.stringify(urls));
            if (urls.length > 0) {
                GetImgEntity.downImg(urls.shift());
            } else {
                console.log("下载完毕");
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
            var savePath = "./more/" + narr[narr.length-2]+'_'+narr[narr.length-1];
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

var pagemax = 2; // 获取10页的内容
function start() {
    console.log("开始获取图片连接");
    GetImgEntity.getHtml(queryHref);
}

start();