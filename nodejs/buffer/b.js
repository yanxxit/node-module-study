var http = require('http');
var helloworld = "";

for (var i = 0; i < 1024 * 10; i++) {
  helloworld += "a";
}
helloworld = new Buffer(helloworld);
http.createServer(function (req, res) {
  res.writeHead(200);
  res.end(helloworld);
}).listen(8001);

// ab -c 200 -t 100 http://127.0.0.1:8001/