var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://app.sh.189.cn/iphone8/p/index', function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function() {
            return document.getElementsByClassName('sharing').textContent;
        });
        console.log(ua);
    }
    phantom.exit();
});