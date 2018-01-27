# phantomjs api



## page.evaluate()
进行dom 操作


## page.render
page.render(filename)
page.render()能够把当前页面渲染成图片并输出到指定文件中。输出的文件格式由传入的文件扩展名决定，目前支持 PNG、 JPEG、 GIF、 PDF。
var page = require('webpage').create();
page.open('http://github.com/', function() {
    page.render('github.png');
    phantom.exit();
});