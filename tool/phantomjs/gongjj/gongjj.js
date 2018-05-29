var page = require('webpage').create();
phantom.outputEncoding = "utf-8";
page.open('http://www.shgjj.com/static/2010/yd.html', function () {
  console.log(page.title);//获取标题
  page.includeJs("//cdn.bootcss.com/jquery/3.2.1/jquery.min.js", function () {
    page.evaluate(function () {
      $(".diqu").forEach((m, i) => {
        console.log("tr----:", m)
      });
    });
    phantom.exit()
  });
});