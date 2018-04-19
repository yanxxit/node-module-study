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
3. execFile：执行一个文件
4. fork：执行文件
5. execSync 
6. execFileSync 自动化脚本时



### spawn 执行命令

一种**异步的方式来产生子进程的**，因此不会**阻塞Node.js的事件循环**，然而`child-process.spawnSync`方法是同步的，他会阻塞事件循环只到产生的进程退出或者终止。

```
spawn (command[,args][, options])
```

常用案例

```js
const { spawn } = require('child_process');
 
const child = spawn('find', [ '.', '-type', 'f' ]);
child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});
 
child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});
 
child.on('exit', (code, signal) => {
  console.log(`child process exit with: code $[code], signal: ${signal}`);
});
```

```Js
{
  cwd: String,
  env: Object,
  stdio: Array | String,
  detached: Boolean,
  shell: Boolean,
  uid: Number,
  gid: Number
}
```

重点说明下 detached 属性，detached 设置为 true 是为子进程独立运行做准备。子进程的具体行为与操作系统相关，不同系统表现不同，Windows 系统子进程会拥有自己的控制台窗口，POSIX 系统子进程会成为新进程组与会话负责人。

这个时候子进程还没有完全独立，子进程的运行结果会展示在主进程设置的数据流上，并且主进程退出会影响子进程运行。当 stdio 设置为 ignore 并调用 child.unref(); 子进程开始真正独立运行，主进程可独立退出。

### exec 执行一条命令

**产生一个shell客户端，然后使用shell来执行程序**，当完成的时候传递给回调函数一个stdout和stderr

执行一条命令，通过回调参数返回结果，指令未执行完时会缓存部分结果到系统内存。

**两全其美 —— spawn 代替 exec**

由于 exec 的结果是一次性返回，在返回前是缓存在内存中的，所以在执行的 shell 命令输出过大时，使用 exec 执行命令的方式就无法按期望完成我们的工作，这个时候可以使用 spawn 代替 exec 执行 shell 命令。

### execFile 执行一个文件

使用执行文件直接执行，exec 需要shell 去执行脚本。

和exec相似，但是他不会马上产生一个shell？怎么理解》

其中file表示需要执行的文件。 child_process.execFile()和exec很相似，但是这个方法不会产生一个shell。指定的可执行文件会马上产生一个新的线程，因此其效率比child_process.exec高。

与 exec 功能基本相同，不同之处在于**执行给定路径的一个脚本文件**，并且是**直接创建一个新的进程**，而不是创建一个 shell 环境再去运行脚本，相对更轻量级更高效。但是在 Windows 系统中如 .cmd 、 .bat 等文件无法直接运行，但可以使用 spawn、exec 代替。

```Js
const execFile = require('child_process').execFile; 
const child = execFile('node', ['--version'], (error, stdout, stderr) => { 
 if (error) { 
  throw error; 
 } 
 console.log(stdout); 
}); 
```



### fork 执行一个Node.js文件

fork 实际是 spawn 的一种特殊形式，固定 spawn Node.js 进程，并且在主子进程间建立了通信通道，让主子进程可以使用 process 模块基于事件进行通信。

```Js
// parent.js
const { fork } = require('child_process');
const child = fork('child.js');
child.on('message', (msg) => {
  console.log('Message from child', msg);
});
child.send({ hello: 'world' });

// child.js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
});
let counter = 0;
setInterval(() => {
  process.send({ counter: counter++ });
}, 3000);
```



## 子进程常用事件

1. exit
2. close
3. error
4. message

## close 与 exit 是有区别的

close 是在**数据流关闭时**触发的事件，exit 是在**子进程退出时**触发的事件。因为多个子进程可以共享同一个数据流，所以当某个子进程 exit 时不一定会触发 close 事件，因为这个时候还存在其他子进程在使用数据流。



## 关闭子进程操作

n3.kill()//干掉子进程

```js
const { spawn, exec, fork } = require('child_process');
var n3 = fork('./child3.js');//创建n3子进程

//---------------------------------------------------
//可以将这一块功能嵌入到功能中
//监控子进程的状态，在主线程中实现
n3.send({ hello: 'world' });//请求信息 向n3子进程发送消息
n3.on('message', function (m) {//接受子进程n3传递的消息
  console.log('从child3 中获取数据:', m);
  n3.kill()//干掉n3子进程
});

n3.on("close", (m) => {//流关闭时，触发事件
  console.log("close ---- 关闭流退出", m)
})

n3.on("exit", (m) => {//进程关闭，触发事件
  console.log("exit --- 子进程退出", m)
})

n3.on("error", (m) => {
  console.log("errir---子进程异常", m)
})
```

操作结果

```
子进程获取数据 { hello: 'world' }
从child3 中获取数据: { err: null, data: '------ok' }
exit --- 子进程退出 null
close ---- 关闭流退出 null
```

子进程先关闭，然后数据流才关闭

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

## 对比

* spawn spawn是最原始的创建子进程的函数
* exec
* execFile
* fock

spawn只能运行指定的程序，参数需要在列表中给出，相当于execvp系统函数，而exec可以直接运行复杂的命令。

### 关于exec、spawn、fork

​     1.exec函数是对spawn的一种友好封装，增加Shell命令解析，可以直接嵌入复杂的命令

​     2.exec函数缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回

​     3.spawn在子线程开始执行后，就开始不断将数据从子进程返回给主进程（应用场景如“系统监控”）

​     4.spawn是不支持callback函数的，它通过流的方式发数据传给主进程，从而实现了多进程之间的数据交换

​     5.fork()是spawn()的特殊情景，用于派生Node进程。除了普通ChildProcess实例所具有的所有方法，所返回的对象还具有内建的通讯通道。

## 在windows平台上执行.bat和.cmd：

child_process.exec和child_process.execFile的不同之处可能随着平台不同而有差异。在Unit/Linux/OSX平台上execFile更加高效，因为他不会产生shell。在windows上，.bat/.cmd在没有终端的情况下是无法执行的，因此就无法使用execFile（child_process.spawn也无法使用）。在window上，.bat/.cmd可以使用spawn方法，同时指定一个shell选项；或者使用child_process.exec或者通过产生一个cmd.exe同时把.bat/.cmd文件传递给它作为参数（child_process.exec就是这么做的）。

```Js
const spawn = require('child_process').spawn; 
const bat = spawn('cmd.exe', ['/c', 'my.bat']);//使用shell方法指定一个shell选项 
bat.stdout.on('data', (data) => { 
 console.log(data); 
}); 
bat.stderr.on('data', (data) => { 
 console.log(data); 
}); 
  
bat.on('exit', (code) => { 
 console.log(`Child exited with code $[code]`); 
});
```

或者也可以使用如下的方式：

```js
const exec = require('child_process').exec;//产生exec，同时传入.bat文件 
exec('my.bat', (err, stdout, stderr) => { 
 if (err) { 
  console.error(err); 
  return; 
 } 
 console.log(stdout); 
});
```



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

http://www.jb51.net/article/109655.htm

http://www.jb51.net/article/60708.htm

http://www.jb51.net/article/130159.htm