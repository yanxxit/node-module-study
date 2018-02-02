const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('发生了一个事件!');
});

myEmitter.on("about", (data) => {
    console.log(data)
});
myEmitter.emit('event');

setTimeout(function() {
    myEmitter.emit("event");
}, 1000);
var count = 0;
setInterval(() => {
    myEmitter.emit("about", count++);
}, 1000);