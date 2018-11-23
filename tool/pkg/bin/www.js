const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello wrold\n");
});

console.log(__dirname); //只是路径
console.log(__filename); //包含文件名的路径
// console.log(global);
console.log(global.process.version);
// console.log(global.process.env);
console.log(global.process.env.PWD);
console.log(global.process.env.OS);
// console.log(global);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}`);
});
