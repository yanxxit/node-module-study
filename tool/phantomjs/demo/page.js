var page = require('webpage').create();
phantom.outputEncoding = "utf-8";


var checkList = [
    {"url": "http://m.sh.189.cn/html/more/index1.html", "name": '热门活动', "keywords": ["热门活动"]}
];

//打开连接
page.open("http://m.sh.189.cn/html/more/index1.html", function (status) {
    if (status === "success") {
        console.log(page.title);//获取标题
        // console.log(page.content);//页面内容

        // var content = page.evaluate(function() {
        //     var element = document.querySelector('#content');
        //     return element.textContent;
        // });
        // console.log(content);

    } else {
        console.log("Page failed to load.");
    }
    phantom.exit(0);
});