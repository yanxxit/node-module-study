const { spawn, exec, fork } = require('child_process');
const fs = require("fs")
//子进程 接受父进程传递的数据
process.on('message', function (m) {
  console.log("子进程获取数据", m)
  fs.readFile("./test.txt", "utf-8", (err, data) => {
    process.send({ err, data })
  });
});

