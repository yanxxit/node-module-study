var fs = require("fs")
var path = require("path")
var p = console;

// fs.readdir("../", function(err, data) {
//     p.log(data);
// })
var add = {};
// fs.readdir("../", function(err, data) {
//     data.forEach(function(m, i) {
//         if (m.indexOf(".md") == -1) {
//             add[m] = fs.readdirSync("../" + m)
//         }
//     });
//     p.log("打印结果：----")
//     p.log(add)
// })

p.log(fs.readdirSync("../fs"))

p.log();

// fs.chmod("./temp.js", 777, function(err) {
//     p.log("设置成功")
// })

// fs.access("./fs.md", function(err, data) {
//     p.log(err)
//     p.log(data)
// });

// fs.stat("./fs.md", function(err, data) {
//     p.log("查看文件状态")
//     p.log(err)
//     p.log(data)
// })

// fs.stat("./fs.mds", function(err, data) {
//     p.log(err)
//     p.log(data)
//     if (err) {
//         p.log("不存在")
//     } else {
//         p.log("已经存在")
//     }
// })
