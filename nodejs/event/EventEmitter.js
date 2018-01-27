var events = require("events");
var emitter = new events.EventEmitter();//创建了事件监听器的一个对象
// 监听事件some_event
emitter.on("some_event", function () {
    console.log("事件触发，调用此回调函数");
});
setTimeout(function () {
    emitter.emit("some_event");   //触发事件some_event
}, 1000);