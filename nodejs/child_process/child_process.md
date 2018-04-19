# child_process - 子进程



## 子进程应用场景

1. 计算密集型系统
2. 前端构建工具利用多核 CPU 并行计算，提升构建效率
3. 进程管理工具，如：PM2 中部分功能

* 实践例子，比如webpack打包的时候，文件越多越慢，其实也可以利用这个机制来实现多进程打包的。ykit就是这样做的。

## 常见问题

- 进程管理关闭主进程后，子进程变为操作系统进程（pid 为 1）

  - 将子进程看做独立运行的进程，记录 pid，发布时进程管理关闭主进程同时关闭子进程

    主进程监听关闭事件，主动关闭从属于自己的子进程

## 子进程种类

1. spawn：执行命令
2. exec：执行命令（新建 shell）
3. execFile：执行文件
4. fork：执行文件

## 子进程常用事件

1. exit
2. close
3. error
4. message

## close 与 exit 是有区别的

close 是在数据流关闭时触发的事件，exit 是在子进程退出时触发的事件。因为多个子进程可以共享同一个数据流，所以当某个子进程 exit 时不一定会触发 close 事件，因为这个时候还存在其他子进程在使用数据流。



## 关闭子进程操作



## 子进程数据流

1. stdin
2. stdout
3. stderr

因为是以主进程为出发点，所以子进程的数据流与常规理解的数据流方向相反，stdin：写入流，stdout、stderr：读取流。

- `cluster` 底层就是 `child_process`
- master 进程做中控，启动 1 个 agent 和 n 个 worker
- agent 来做任务调度，跟数据库交互来获取任务，并分配给某个空闲的 worker 来做
- worker 就是 cluster 出来的。

## 创建子进程

## 子进程与父进程信息通讯

## 进程间通讯

## 常用函数

* spawn spawn是最原始的创建子进程的函数
* exec
* execFile
* fock

spawn只能运行指定的程序，参数需要在列表中给出，相当于execvp系统函数，而exec可以直接运行复杂的命令。





## [Node.js中的child_process及进程通信](https://www.byvoid.com/zhs/blog/node-child-process-ipc)

[child_process](http://nodejs.org/api/child_process.html)是Node.js的一个十分重要的模块，通过它可以实现创建多进程，以利用多核计算资源。

Node.js 0.8的`child_process`模块提供了四个创建子进程的函数，分别是`spawn`，`exec`，`execFile`和`fork`。其中`spawn`是最原始的创建子进程的函数，其他三个都是对`spawn`不同程度的封装。`spawn`只能运行指定的程序，参数需要在列表中给出，相当于`execvp`系统函数，而`exec`可以直接运行复杂的命令。

例如要运行`ls -lh /usr`，使用`spawn`需要写成`spawn('ls', ['-lh', '/usr'])`，而`exec`只需`exec('ls -lh /usr')`。`exec`的实现原理是启动了一个系统shell来解析参数，因此可以是非常复杂的命令，包括管道和重定向。此外，`exec`还可以直接接受一个回调函数作为参数，回调函数有三个参数，分别是`err`, `stdout`, `stderr`，非常方便直接使用，例如：

```
child_process.exec('ls -lh /usr', function(err, stdout, stderr) {
  console.log(stdout);
});
```

如果使用`spawn`，则必须写成：

```
child = child_process.spawn('ls', ['-lh', '/usr']);
child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
  console.log(data);
});
```

`execFile`与`spawn`的参数相似，也需要分别指定执行的命令和参数，但可以接受一个回调函数，与`exec`的回调函数相同。它与`exec`的区别在于不启动独立的`shell`，因此相比更加轻量级。

`fork`函数用于直接运行Node.js模块，例如`fork('./child.js')`，相当于`spawn('node', ['./child.js'])`。与默认的`spawn`不同的是，`fork`会在父进程与子进程直接建立一个IPC管道，用于父子进程之间的通信。例如：

```
var n = child_process.fork('./child.js');
n.on('message', function(m) {
  console.log('PARENT got message:', m);
});
n.send({ hello: 'world' });
```

`child.js`的内容：

```
process.on('message', function(m) {
  console.log('CHILD got message:', m);
});
process.send({ foo: 'bar' });
```

其中父进程调用`fork`函数获取一个返回值，作为子进程的句柄，通过`send`函数发送信息，`on('message')`监听返回的信息，子进程通过内置的`process`对象相同的方法与父进程通信。

`fork`函数有一个问题，就是它只能运行JavaScript代码，如果你喜欢用CoffeeScript（或者其他任何编译到js的语言），是无法通过`fork`调用的。一个简单的方法是把代码编译到JavaScript再运行，但是很不方便，有没有什么办法呢？

答案是可以的，还是得回到`spawn`函数。`spawn`函数除了接受`command`, `args`外，还接受一个`options`参数。通过把`options`参数的`stdio`设为`['ipc']`，即可在父子进程之间建立IPC管道。例如子进程使用CoffeeScript：

```
child_process = require('child_process')
options =
  stdio: ['ipc']
child = child_process.spawn 'coffee', ['./child.coffee'], options
```

其中只要把`spawn`的第一个参数设置为运行对应脚本的解释器，即可运行，例如使用[Continuation.js](https://github.com/BYVoid/continuation)，只需`child = child_process.spawn('continuation', ['./child.coffee'], options)`。



## 参考

https://segmentfault.com/a/1190000006062651