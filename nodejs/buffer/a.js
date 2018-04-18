var p = console;
var fs = require("fs")

var str = "深入浅出node.js";
p.log("str:", str.length)
var buf = new Buffer(str, 'utf-8')
p.log("buf:" + buf.length)
p.log(buf)
p.log(buf[10])

var rs = fs.createReadStream('./test.md', { highWaterMark: 11 });
var data = '';
rs.setEncoding('utf8');//针对中文模式
rs.on("data", function (chunk) {
  data += chunk;
});
rs.on("end", function () {
  console.log(data);
});


var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var buf1 = new Buffer([0xE5, 0xBA, 0x8A, 0xE5, 0x89, 0x8D, 0xE6, 0x98, 0x8E, 0xE6, 0x9C]);
console.log(decoder.write(buf1));
// =>  前 
var buf2 = new Buffer([0x88, 0xE5, 0x85, 0x89, 0xEF, 0xBC, 0x8C, 0xE7, 0x96, 0x91, 0xE6]);
console.log(decoder.write(buf2));
// =>     