var page = require('webpage').create();
page.open('http://app.sh.189.cn/iphone8/p/index', function () {
    page.includeJs("//cdn.bootcss.com/jquery/3.2.1/jquery.min.js", function () {
        page.evaluate(function () {
            $("a").click(function () {
                console.log($(this))
            });
            console.log($("a"))
        });
        phantom.exit()
    });
});