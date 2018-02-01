var path = require("path");

console.log(path.join(__dirname, 'view'))
console.log(path.join(__dirname, 'view', "demo"))
console.log(path.join(__dirname, "../", 'view', "demo"))

var p = console

// p.log(process.env.PATH); //path 信息

// p.log(process.env.PATH.split(path.delimiter))

p.log("foo/bar/baz".split(path.sep))
p.log("foo\\bar\\baz".split(path.sep))
p.log(path.sep)