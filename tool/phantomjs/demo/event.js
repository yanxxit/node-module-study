var page = require('webpage').create();
phantom.outputEncoding = "utf-8";
page.open("https://www.baidu.com", function(status) {
    if (status === "success") {
        console.log(page.title);

        var content = page.evaluate(function() {
            var element = document.querySelector('#jgwab');
            return element.textContent;
        });
        console.log(content);

    } else {
        console.log("Page failed to load.");
    }
    phantom.exit(0);
});