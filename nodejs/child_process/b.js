const { spawn, exec, fork } = require('child_process');
var n = fork('./child.js');
var n2 = fork('./child2.js');
var n3 = fork('./child3.js');
//只能读取child.js 的消息
n.on('message', function (m) {
  console.log('PARENT got message:', m);
});

setInterval(() => {
  // n.send({ hello: 'world' });
}, 3000);

//可以同时处理多个子进程
//父进程接收，子进程传递的数据
//on是用来接收数据
//n.send()//父进程想子进程发送数据
//process.send()子进程向父进程发送数据
n2.on('message', function (m) {
  console.log('PARENT get child2 message:', m);
});

//---------------------------------------------------
//可以将这一块功能嵌入到功能中
//监控子进程的状态，在主线程中实现
n3.send({ hello: 'world' });//请求信息
n3.on('message', function (m) {//获取信息
  console.log('从child3 中获取数据:', m);
  n3.kill()//干掉子进程
});

n3.on("exit", (m) => {
  console.log("exit --- 子进程退出", m)
})
n3.on("close", (m) => {
  console.log("close ---- 关闭流退出", m)
})
n3.on("error", (m) => {
  console.log("errir---子进程异常", m)
})
