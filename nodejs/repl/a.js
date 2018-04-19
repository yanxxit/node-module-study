const repl = require('repl');
const msg = 'message';

const r = repl.start('> ');
//定义多个入参解析
Object.defineProperty(r.context, 'm', {
  configurable: false,
  enumerable: true,
  value: msg
});
Object.defineProperty(r.context, 'ok', {
  configurable: false,
  enumerable: true,
  value: msg
});