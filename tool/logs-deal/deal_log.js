const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/wechat-2018-01-30.log')
});
var count = 0;
rl.on('line', (line) => {
    if (line.indexOf("自助报障增加日志记录") > 0) {
        console.log(line);
        count++
    }

    // console.log()
    // const arr = line.split('[INFO]');
    // console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1]);
});

//直接做统计很快，但是在加上处理，就比较慢了
setTimeout(function () {
    console.log("当前梳理：" + count)
}, 10000);