var fs = require("fs");
const p = console;
//Promise 方法
var getFileData = function (from) {
  return new Promise(function (resolve, reject) {
    fs.readFile("./es7_async.md", "utf-8", (err, data) => {
      if (err) return reject(err)
      if (data == null || data == "") return reject(new Error("file is null"))
      p.log(from)
      resolve(data)
    });
  })
};

var getInfo = function (from) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let a = "from:" + from + " now:" + (new Date().getSeconds());
      p.log(a)
      resolve(a)
    }, 2000)
  })
};


let list = [100, 1, 2, 3, 4, 5, 7, 8, 9, 10]

list.forEach(async (n, i) => {
  await getInfo(n)
  await getFileData(n)
});

(async () => {
  p.log("第二个async")
})();