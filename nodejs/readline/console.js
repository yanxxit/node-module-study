const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    console.log(`接收到：${input}`)
});

rl.question("你觉得node.js中文网怎么样呀", (answer) => {
    console.log(`感谢您的反馈：${answer}`)
    rl.write("尝试！");
    rl.close()
})