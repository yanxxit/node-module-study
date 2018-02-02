const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("about", (name, count) => {
    console.log("name:" + name + ",count:" + count)
});

myEmitter.emit("about", "admin", 1);

setInterval(() => {
    myEmitter.emit("about", "李四", new Date().getTime())
}, 1000);