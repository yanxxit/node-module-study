const co = require('co');

const sayHello = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
           return resolve("hello "+ (new Date().getTime()));
        }, 1000);
    });
};

co(function* () {
    console.log("1111111111");
    let a = yield sayHello();
    console.log(a)
    let b = yield sayHello();
    console.log(b)
});