var page = require('webpage').create();
phantom.outputEncoding = "utf-8";
page.open("https://www.baidu.com", function(status) {
    if (status === "success") {
        console.log(page.title);
    } else {
        console.log("Page failed to load.");
    }
    phantom.exit(0);
});

//phantomjs demo.js