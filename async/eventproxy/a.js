var EventProxy = require("eventproxy");
var fs = require("fs");
var ep = new EventProxy();
var p = console;


//读取信息
fs.readFile("./eventproxy.md", "utf-8", function (err, data) {
    p.log(err, data)
});

//同步一次处理异步I/O ，串行处理
ep.bind("a1", function (data) {
    ep.emit("a2", "hello world");
});

ep.bind("a2", function (data) {
    p.log("同步进行：" + data);
});
ep.emit("a1", "love");

//并行处理 ep.all并行处理



