var proxy = require('http-proxy-middleware');//功能实现的OK
var express = require('express');
var options = {
  target: 'http://127.0.0.1:8765', // target host 
  changeOrigin: true,               // needed for virtual hosted sites 
  pathRewrite: {
    '/abc': '/design',     // rewrite path 
    '/bbb': '/design/users',     // rewrite path  http://127.0.0.1:8088/bbb
  }
};

var exampleProxy = proxy(options);

var app = express();


app.use(function (req, res, next) {
  console.log("我先执行");
  console.log("执行授权，中间件");
  next();
});

app.use('/', exampleProxy);//代理


app.listen(7777, function () {
  console.log("启动了");
})