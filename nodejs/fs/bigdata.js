//突破V8内存限制，实现大文件的读取
var fs = require("fs")
var reader = fs.createReadStream("./fs.md");
var writer = fs.createWriteStream("./out.txt")

reader.on("data", function (chunk) {
  console.log(chunk.toString())//将数据转换
  writer.write(chunk);//chunk 是buffer 
});

reader.on("end", function () {
  writer.end();
})

// reader.pipe(writer)//可读流提供了管道方法pipe(),封装了data事件和写入操作，这样不受V8 内存限制，但是大片内存情况依然要小心，即使V8不限制，物理内存依然有限制。