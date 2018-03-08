//https://www.npmjs.com/package/co
var co = require('co');
 
co(function *(){
  // yield any promise 
  var result = yield Promise.resolve(true);
}).catch(onerror);
 
co(function *(){
  // resolve multiple promises in parallel 
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var d = Promise.resolve(4);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3] 
}).catch(onerror);

//Arrays
co(function* () {
    var res = yield [
      Promise.resolve(11),
      Promise.resolve(22),
      Promise.resolve(33),
    ];
    console.log(res); // => [1, 2, 3] 
  }).catch(onerror);

  //Object
  co(function* () {
    var res = yield {
      a: Promise.resolve(1),
      b: Promise.resolve(2),
    };
    console.log(res); // => { 1: 1, 2: 2 } 
  }).catch(onerror);

 
// errors can be try/catched 
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom" 
 }
}).catch(onerror);
 
function onerror(err) {
  // log any uncaught errors 
  // co will not throw any errors you do not handle!!! 
  // HANDLE ALL YOUR ERRORS!!! 
  console.error(err.stack);
}

//co(fn*).then( val => )
co(function* () {
    return yield Promise.resolve("返回结果！！！！！！");
  }).then(function (val) {
    console.log(val);
  }, function (err) {
    console.error(err.stack);
  });

  var fn = co.wrap(function* (val) {
    return yield Promise.resolve(val);
  });
   
  fn("hello co.wrap(fn*)").then(function (val) {
    console.log(val)
  });
