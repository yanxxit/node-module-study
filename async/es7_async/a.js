var fs = require("fs");
const p = console;

(async () => {
    p.log("第一个async")
    const a = await function () {
        return new Promise((resolve, reject) => {
            resolve("a 返回结果")
        });
    }()
    const b = await function () {
        return new Promise((resolve, reject) => {
            resolve("b 返回结果")
        })
    }()
    p.log(a)
    p.log(b)
})();

//Promise 方法
var getFileData = function (from) {
    return new Promise(function (resolve, reject) {
        fs.readFile("./es7_async.md", "utf-8", (err, data) => {
            if (err) return reject(err)
            if (data == null || data == "") return reject(new Error("file is null"))
            resolve(data)
        });
    })
};

//错误异常只能使用try catch 进行捕捉吗
(async () => {
    p.log("第二个async")
    try {
        let from = "";
        let fileInfo = await getFileData(from);//查看当前队列数量
        p.log(fileInfo)
        //获取匿名promise函数 写入一些数据
        let data = await function () {
            return new Promise((resolve, reject) => {
                fs.writeFile("./test.js", "console.log(1)", function (err) {
                    if (err) return reject(err)
                    resolve("-------写入成功")
                });
            })
        }()//获取微信用户openid
        p.log(data)
        p.log("查看结果")
    } catch (err) {
        p.log("授权时，非正常信息：" + err)
    }
})();