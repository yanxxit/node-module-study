const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});

myEmitter.on('good', () => {
    console.log('非常好，加油');
});
myEmitter.emit('event');
myEmitter.emit('good');

myEmitter.on('event1', function(a, b) {
    console.log(a, b, this);
});
myEmitter.emit('event1', 'a', 'b');


const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]