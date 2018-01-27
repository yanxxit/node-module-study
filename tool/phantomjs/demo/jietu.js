var page = require('webpage').create();
//除了 png 格式的转换，PhantomJS还支持 jpg，gif，pdf等格式。
page.open('http://m.sh.189.cn/html/more/index.html', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});