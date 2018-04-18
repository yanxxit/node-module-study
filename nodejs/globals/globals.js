var p = console;


console.log(__dirname);
console.log(__filename);

// p.log(Buffer)//全局变量

// p.log(module)
// p.log(global)

//遍历全局变量
for (let n in global) {
  p.log(n)
}

//process
//console:
// setTimeout:
// setInterval::
// p.log(console)