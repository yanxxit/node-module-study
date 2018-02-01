var os = require("os");

console.log(os.type())
console.log(os.release())
console.log(os.platform());
console.log(os.cpus().length);

os.cpus().forEach(function(m, i) {
    console.log(m.model)
});

console.log("系统内存：" + os.totalmem() + "byte")
console.log("系统内存：" + os.totalmem() / (1024 * 1024 * 1024) + "G") //11.8G

console.log("操作系统运行时间：" + os.uptime()) //秒为单位

var p = console

p.log("操作系统的主机名：" + os.hostname)

p.log("主目录：" + os.homedir());
p.log(os.tmpdir());