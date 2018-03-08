const _ = require("underscore")._;
const moment = require("moment");
var p = console;
const map = new Map([
    ['a', '上海'],
    ['b', '<'],
    ['c', '>='],
    ['d', '<='],
    ['e', '!=']
]);
p.log(map)
p.log("map.length" + map.length)//不起效
p.log("map.get:" + map.get('a'))
p.log("map.get:" + map.get('1'))

map.forEach(function (m, i) {
    p.log(m + "------------->" + i)
});

//不能识别
for (var m in map) {
    p.log("for in", m)
}
//of 可以便利
for (var m of map) {
    p.log("for in", m)
}

p.log("当前时间戳：" + moment().unix())
p.log(moment().format("YYYY-MM-DD"));
p.log(moment().add(1, "days").format("YYYY-MM-DD"));

p.log(moment(moment().format("YYYY-MM-DD")).unix())
p.log(moment(moment().add(1, "days").format("YYYY-MM-DD")).unix())

//underscore
p.log(_.isObject({}))

//Object.keys  values
//Object.keys();    //接受一个对象作为参数，获取对象的可枚举的实例属性。
//Object.getOwnPropertyNames();    //接受一个对象作为参数，获取对象的所有的实例属性（包括不可枚举）。
let myobj = { a: 1, b: 2, c: 3 }
let myobjlist = [{ a: 1 }, { a: 2 }, { a: 3 }]

p.log(Object.keys(myobj))
p.log(Object.keys(myobj).length)
p.log(Object.values(myobj))
p.log(Object.keys(myobjlist))
p.log(Object.values(myobjlist))

p.log(Object.keys(myobj).join(","))
p.log(Object.keys(myobj).join("-"))
p.log(Object.values(myobj).join(":"))

p.log("-------" + Object.getOwnPropertyNames(myobj))
