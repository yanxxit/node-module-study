const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let name = 'yxxit';
console.log(`你好，${name}`);
console.log("你好，${name}");
console.log('你好，${name}');
var t = `你好，${name}`;
console.log(typeof t);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Hello World\n</p>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});