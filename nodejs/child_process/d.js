var cluster = require('cluster');
var cpus = require('os').cpus();
// 传递的事件名
var triggerEvent = {
  inc: 'inc',
  dec: 'dec'
}
// 错误的数据共享方式
var globalDataError = 0;
if (cluster.isMaster) {
  // 正确的数据共享方式
  var globalDataSuccess = 0;
  globalDataError++;
  // 启动多个进程，取决于内核数
  for (var i = 0; i < cpus.length; i++) {
    var worker = cluster.fork();
    worker.on('message', function (msg) {
      switch (msg) {
        case triggerEvent.inc:
          globalDataSuccess++;
          console.log('globalDataSuccess = ', globalDataSuccess);
          break;
        case triggerEvent.dec:
          globalDataSuccess--;
          console.log('globalDataSuccess = ', globalDataSuccess);
          break;
      }
    });
  }
  console.log('Master globalDataError = ', globalDataError);
} else {
  globalDataError++;
  console.log('Worker globalDataError = ', globalDataError);
  process.send(triggerEvent.dec);
  process.send(triggerEvent.inc);
}