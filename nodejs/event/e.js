const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
    console.log('哇哦！这儿有个错误11' + err);
});
process.on('uncaughtException', (err) => {
    console.log('哇哦！这儿有个错误22');
});

myEmitter.emit('error', new Error('whoops!'));
// 打印：哇哦！这儿有个错误