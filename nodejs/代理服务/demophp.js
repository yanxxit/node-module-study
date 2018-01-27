var express = require('express');
var request = require('request');
var app = express();
app.use('/', function (req, res) {
    var url = 'http://172.16.50.135/' + req.url;
    req.pipe(request(url)).pipe(res);//pipe补充
});
app.listen(process.env.PORT || 3000);
