var moment = require("moment");

//仅仅为了偷懒，少些写代码
var p = console.log;

console.log = function (str) {
    p(str)
    return str
};

var dem = console.log("----------abd")
p(dem)


//var lastLog;
//console.oldLog = console.log;
//console.log = function(str) {
//    console.oldLog(str);
//    lastLog = str;
//}
//console.log("Hello, Neo");
//p(lastLog)


//一定要定计划，为了实现当前进度，与当前清单
//todo 简单时间格式转换
//todo 获取当前时间戳
//todo 将时间戳转换为规定格式
//todo 上一个月，下一天，下一年，时间查等
//todo 代码简化，获取console.log 打印结果

var m = moment();

console.log(moment());
console.log("-----------------------------------------------------");
console.log("时间格式化：" + moment().format("YYYY-MM-DD"))
console.log("时间格式化：" + moment().format("YYYY.MM.DD"))
console.log("时间格式化：" + moment().format("YYYY年MM月DD日"))
console.log("时间格式化：" + moment().format("YYYY-MM-DD HH:mm:ss"))

p("获取某月最后一天：" + moment().endOf('month').format("YYYY-MM-DD"));
var EndTime = '201706'
var t = EndTime.substr(0, 4) + '-' + EndTime.substr(4)
p(t)
p("获取某月最后一天：" + moment(t).endOf('month').format("YYYY-MM-DD"));

p("时间戳：" + m.unix() + ' length:' + ("" + m.unix()).length)

p("时间戳转换为时间" + moment(m.unix() * 1000).format('YYYY-MM-DD'));

