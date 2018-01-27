var http = require('http');

var requestHandler = function (req, res) {
    res.end('hello world!');
};

var wap = http.createServer(requestHandler);

wap.listen(3000, function () {
    console.log('启动端口：3000')
});