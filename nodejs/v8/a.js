const v8 = require("v8")
const p = console;


//返回一个表示从V8版本，命令行标志和已检测到的CPU功能派生的“version tag”的整数。这对于判断vm.Script cachedData是否兼容当前v8实例非常有用。
p.log(v8.cachedDataVersionTag())

p.log(v8.getHeapSpaceStatistics())