const signale = require('signale');

signale.success('操作成功完成');
signale.error(new Error('无法获取锁'));
signale.pending('为版本%s编写发布说明', '1.2.0');


const global = signale.scope('全局作用域');
global.success('来自全局作用域的消息');