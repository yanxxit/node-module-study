const url = require('url');

var myurl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

var my1 = url.parse(myurl);//将地址转换一下

console.log(my1)


console.log('url.href : ' + my1.href);
console.log('url.protocol : ' + my1.protocol);
console.log('url.slashes : ' + my1.slashes);
console.log('url.host : ' + my1.host);
console.log('url.auth : ' + my1.auth);
console.log('url.hostname : ' + my1.hostname);
console.log('url.port : ' + my1.port);
console.log('url.pathname : ' + my1.pathname);
console.log('url.search : ' + my1.search);
console.log('url.path : ' + my1.path);
console.log('url.query : ' + my1.query);
console.log('url.hash : ' + my1.hash);

//url.format(urlObject)

console.log("url.format: "+url.format(my1))

console.log('\n url.resolve')
console.log(url.resolve('/one/two/three', 'four'))         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'))    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')) // 'http://example.com/two'