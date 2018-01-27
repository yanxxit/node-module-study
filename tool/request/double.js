var LocalHttpUtil = require('./LocalHttpUtil');

var url = 'http://172.16.50.141/wechat/Rest/Pay/sumBenefitMoneyByFromOrPaydate?from='+encodeURIComponent('月月连充缴优惠充');
LocalHttpUtil.get(url, function (err, rest, result) {
    console.log(url);
    console.log(err);
    console.log(result)
});redis