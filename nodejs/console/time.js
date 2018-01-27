console.time('100-elements');
for (var i = 0; i < 10000000; i++) {
    ;
}
console.timeEnd('100-elements');

//活动时间
// console.time
// console.timeEnd 对于同一个对象只能出现一次。
console.time('记录响应时间');
setTimeout(()=> {
    console.timeEnd('记录响应时间')
}, 1000);
//console.timeEnd('action');


//console.trace('Show me');

var count = 5;
console.log('count: %d 你好', count);
// Prints: count: 5, to stdout
console.log('count:', count);
console.log('count:' + count);
console.log(`新get了一个技能count:${count}`);

// console.info()响应信息时间
console.info('你好');//是console.log()的一个别名

//console.warn() 是console.error()的别名


var obj = {admin: 'admin', name: '名称'};
console.dir(obj, {colors: true});//打印时，添加颜色
console.dir(obj, {depth: 4});//暂时未发现
console.dir(console, {showHidden: true});//呈现隐藏的数据，数据量比较大，建议不要开启
console.log(obj);
