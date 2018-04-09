const express = require('express')
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
const app = express()
// 身份认证
app.use((req, res, next) => {
  // TODO: 身份认证逻辑
  console.log("进行身份认证")
  next()
})

// 代理请求
app.all('/design/*', (req, res, next) => {
  proxy.web(req, res, { target: 'http://127.0.0.1:80' });
})

app.listen(8000)