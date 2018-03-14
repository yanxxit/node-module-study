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

//嵌入，串行调用接口
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

//Promise.all  实现多个不同业务的，同时请求，全部由返回时，整个才处理成功
p.log("Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。")
p.log("const p = Promise.all([p1, p2, p3]);")

const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        return resolve(url)
    });
    return promise
};

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
    p.log(posts)
}).catch(function (reason) {
    p.log(reason)
});

//Promise.resolve()

const d = Promise.resolve('Hello');

d.then(function (s){
  p.log(s)
});

//为什么要打印 new Error 呢，因为Error对象中包含错误的信息比较多 error是一个object 对象
const e = Promise.reject(new Error("this is reject!"))
e.catch((e)=>{
    p.log(typeof e)
    p.log(e)
})

//执行顺序
setTimeout(()=>{
    p.log("three")
    p.log("setTimeout(fn,0)在下轮事件循环开始执行");
},0);

Promise.resolve().then(()=>{
    p.log("two")
    p.log("Promse.resolve()在本轮时间循环结束时执行")
});

p.log("one");
p.log("立即执行");


//promise.try
