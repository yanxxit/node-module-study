const { spawn, exec } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});

exec('ls -al', function (err, stdout, stderr) {
  if (err) {
    console.error("error:" + err)
  }
  console.log("-------------stdout:" + stdout);
  console.log("stderr:" + typeof stderr);
  console.log("stderr:" + stderr);
});