var os = require("os");
var p = console

p.log("操作系统CPU架构" + os.arch())//Node.js 二进制编译所用的 
p.log("操作系统的名字:" + os.type())//'Linux' 在 Linux系统上, 'Darwin' 在 macOS 系统上,'Windows_NT' 在 Windows系统上.
p.log("操作系统的发行版:" + os.release())
p.log("操作系统平台:" + os.platform());
p.log("Cpus 数量：" + os.cpus().length);

os.cpus().forEach(function (m, i) {
    p.log(m.model)
});

p.log("系统内存：" + os.totalmem() + " byte")
p.log("系统内存：" + os.totalmem() / (1024 * 1024 * 1024) + "G") //11.8G
p.log("系统空闲内存：" + os.freemem() / (1024 * 1024 * 1024) + "G") //11.8G

p.log("操作系统运行时间：" + os.uptime()) //秒为单位



p.log("操作系统的主机名：" + os.hostname)

p.log("主目录：" + os.homedir());
p.log("默认临时文件目录:" + os.tmpdir());
p.log("有效用户的信息:", os.userInfo());

// p.log("OS 常量:" + os.constants)