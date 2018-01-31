const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('console.js'),
    crlfDelay: Infinity
});

var count = 0;
rl.on('line', (line) => {
    console.log(`${count++}：${line}`);
});