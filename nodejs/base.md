# base

## 系统或者系统增强

http://www.jb51.net/article/59818.htm
http://www.jb51.net/article/89326.htm

## `` 特殊符号 也表示字符串
1.  ""
2.  ''
3.  ``
```
let name = 'yxxit';
console.log(`你好，${name}`);//`你好，yxxit`
console.log("你好，${name}");//你好，${name}
console.log('你好，${name}');//你好，${name}
```

## 响应效果
```
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<p>Hello World\n</p>');
});
//<p>Hello World
//</p>

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Hello World\n</p>');
});
//Hello World

```

这几种符号的异同