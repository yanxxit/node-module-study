var co = require("co");
var p = console;

//在异步的基础上实现同步
co(function* () {
    p.log("为什么要编写function *()");
    const a = Promise.resolve(1);
    const b = Promise.resolve(2);
    const c = Promise.resolve(3);

    var resList = yield [a, b, c]
    p.log(resList);
});

//在异步的基础上实现错误异常
co(function* () {
    p.log("co 接受promise处理中的异常信息");

    const a = yield Promise.reject("发生错误，请捕捉！--------");
    p.log("执行B计划");
}).catch((e) => {
    p.log("因为故障，B计划无法执行！");
    p.log(e);
});

//在什么时候使用then 对应着return 
co(function* () {
    p.log("co 使用then 接受数据");
    p.log("使用then来接受return 值");
    const a = yield Promise.resolve("相应的数据")
    return a
}).then((data) => {
    p.log("第一个then " + data)
    return 11
}).then((data) => {
    p.log("获取返回的return 值" + data)
});

//异步相关问题整理

//如何返回Promise 方法

const fn = co.wrap(function* (val) {
    return yield Promise.resolve(val);
});

fn("hello world").then((data) => {
    p.log("将方法转换为promise--->" + data)
}).catch((e) => {
    p.log(e);
})

const fn2 = co.wrap(function* (key) {
    if (key === 1) {
        return yield Promise.resolve("返回正确结果")
    } else {
        return yield Promise.reject("弹出错误信息");
    }
});

fn2(1).then((a) => {
    p.log("正确的信息返回：" + a)
}).catch((e) => {
    p.log("捕获异常");
});


fn2(2).then((a) => {
    p.log("正确的信息返回：" + a)
}).catch((e) => {
    p.log("=================捕获异常");
});