# Promise 对象

承诺，将来会给一个回复。

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。



这个又是其他函数处理的基础
1. co
2. async/await
3. 

## 异步处理的方案
1. 回调函数
2. 事件
3. promise

发布事件：2015年6月份
es2015,es2016 都属于ES6

ES6原生支持Promise

## ES6
它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

## Promise 
1. 进行中
2. 处理成功
3. 处理失败

## 
```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});

```
## then
针对return 可以一直连下去

## Promise.all a,b,c 没有依赖，都出来完成，才能执行d

## Promise.race() 应用场景

Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.race([p1, p2, p3]);
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

## Promise.resolve()

## Promise.try


Promise 的含义
* 基本用法
* Promise.prototype.then()
* Promise.prototype.catch()
* Promise.prototype.finally()
* Promise.all()
* Promise.race()
* Promise.resolve()
* Promise.reject()
* 应用
* Promise.try()


## 结语
Promise 本身的处理方法比较少，不过即便功能都是有的

1. Promise.all
2. Promise.then 链式调用

一个控制同步，一个控制并发