const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}


//在线监听  触发时，首选响应
myEmitter.once("newListener", (event, listener) => {
    console.log("------------")
    if (event === "event") {
        myEmitter.on("event", () => {
            console.log("B");
        });
    }
});

const myEmitter = new MyEmitter();
console.log()

myEmitter.on("event", () => {
    console.log("A");
});

myEmitter.on("about", () => {
    console.log("--------------11111111111")
});



myEmitter.emit("event");

setInterval(() => {
    myEmitter.emit("about")
}, 1000);