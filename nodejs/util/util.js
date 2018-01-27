const util = require('util');
const debuglog = util.debuglog('foo');
process.env.NODE_DEBUG = 'fs';
process.env.NODE_DEBUG = 'foo';
debuglog('hello from foo [%d]', 123);
debuglog('foo');

console.log(process.env.NODE_DEBUG)