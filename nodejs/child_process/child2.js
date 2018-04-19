const { spawn, exec, fork } = require('child_process');
const fs = require("fs")
//子进程 接受父进程传递的数据
process.on('message', function (m) {
  console.log('child2 get message:', m);
});


// setInterval(() => {
//   exec('ls -al', function (err, stdout, stderr) {
//     if (err) {
//       console.error("error:" + err)
//     }
//     process.send({ stdout: stdout });
//     console.log("stderr:" + typeof stderr);
//     console.log("stderr:" + stderr);
//   });
// }, 3000);

fs.readFile("./child_process.md", "utf-8", (err, data) => {
  // process.send({ err, data })
});