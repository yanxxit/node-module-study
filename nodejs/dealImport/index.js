const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('demo1.js'),
  crlfDelay: Infinity
});

//处理行工具
var dealLine = function (line) {
  if (line.indexOf("import") > -1 && line.indexOf("from") > -1) {
    line = line.replace(/import/, 'const');
    let list = line.split("from");
    // console.log(list)
    let node_name = list[1].replace(/'/g, '').replace(/"/g, '').replace(/ /g, '');
    // console.log(node_name)
    let newline = list[0] + `= require("${node_name}");`
    // console.log(newline);
    return newline + "\n"
  }
  return line + "\n"
}

rl.on('line', (line) => {
  let newline = dealLine(line)
  fs.writeFile("./out.js", newline, { encoding: 'utf-8', flag: 'a' }, function (err, data) {
    // console.log(err, data)
  })
});