# console 功能总结

## 注意要点

#### console.time(label) and  console.timeEnd(label)
```
console.time('记录响应时间');
setTimeout(()=> {
    console.timeEnd('记录响应时间')
}, 1000);
```
**主要作用**：记录操作响应时间

#### console.dir
**语法**：console.dir(obj[, options])
```
var obj = {admin: 'admin', name: '名称'};
console.dir(obj, {colors: true});//打印时，添加颜色
console.dir(obj, {depth: 4});//暂时未发现
console.dir(console, {showHidden: true});//呈现隐藏的数据，数据量比较大，建议不要开启
```

#### Console 类
**获取Console类的方式**
```
const Console = require('console').Console;
const Console = console.Console;
```

