const fs = require('fs');
const http = require('http');
/**
 * fs.existsSync(path)
 * fs.exists() 的同步版本。 如果文件存在，则返回 true，否则返回 false。
 * 注意，虽然 fs.exists() 是废弃的，但 fs.existsSync() 不是。 （fs.exists() 的回调接收的参数与其他 Node.js 回调不一致，fs.existsSync() 不使用回调。）
 */
console.log("fs.exitSync: 同步操作，这个没有异步版本" + fs.existsSync('./fs.md'));

/**
 * 同步创建一个文件夹，而不是一个文件
 */

if (!fs.existsSync('./tmp/new')) {//当文件不存在时，创建
    fs.mkdirSync('./tmp/new');//如果存在，再次创建将会报错
}

//fs.mkdirSync('./tmp/new.md');

//判断文件是否存在 是文件不是目录，err有值时 不存在数据， err 为努力 有文件
fs.stat('./fs.md', function (err, data) {
    console.log({err, data})
});

//删除文件
fs.rmdir('./tmp/hello2', function (err, data) {
    console.log({err, data, info: '删除文件，删除成功时，err字段为null'})
});

//读取文件 异步的读取一个文件的全部内容
fs.readFile('./fs.md', 'utf8', function (err, data) {
    console.log({err, data, info: '读取文件内容'})
});

//fs.readFile('./fs.md', function (err, data) {
//    console.log({err, data, info: '读取文件内容 Buffer 默认'})
//});

/**
 * writeFile 既可以写创建文件又可以创建写内容
 */
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});

fs.writeFile('temp.js', 'console.log("hello world")', {encoding: 'utf-8'}, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});

http.get('http://shcdn.iceinto.com/module/wx/qrscene/10331.jpg', function (res) {
    var imgData = "";
    //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.setEncoding("binary");

    res.on("data", function (chunk) {
        imgData += chunk;
    });

    res.on("end", function () {
        var savePath = "./demo.jpg";
        fs.writeFile(savePath, imgData, "binary", function (err) {
            console.log("下载完毕" + err);
        });
    });
});