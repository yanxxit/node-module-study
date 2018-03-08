//直接使用Promise
const p = console;
const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("111111")
    }, 100);
});

const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("222222")
    }, 100);
});

a.then((data) => {
    p.log(data)
    return "return 的值使用then进行接受"
}).then((info) => {
    p.log(info);
    //调用b 的函数
    b.then((data) => {
        p.log(data)
    })
}).catch((e) => {
    p.log(e)
});

p.log("使用promise 作用是将callback嵌套循环，转换为链式调用方式，不过这种方式也比较麻烦。");