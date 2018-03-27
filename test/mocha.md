# mocha

--reporter mochawesome



## install 
```sh
npm install -g mocha
npm install --save-dev mocha
npm install --save-dev mochawesome

# 生成报告
mocha testfile.js --reporter mochawesome

mocha ./*/*.test.js --reporter mochawesome --reporter-options reportDir=yxxitReports(自定义目录)

mocha --recursive

mocha --recursive --reporter mochawesome --reporter-options reportDir=report
```

### option
--recursive  test子目录下面所有的测试用例----不管在哪一层----都会执行。
--reporter 参数用来指定测试报告的格式，默认是spec格式
--reporters 参数可以显示所有内置的报告格式

--growl参数，就会将测试结果在桌面显示。
--watch参数用来监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha。

--bail参数指定只要有一个测试用例没有通过，就停止执行后面的测试用例。这对持续集成很有用

--grep参数用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例。
--invert参数表示只运行不符合条件的测试脚本，必须与--grep参数配合使用。

可以使用通配符，自定多个文件
### mocha.opts
Mocha允许在test目录下面，放置配置文件mocha.opts，把命令行参数写在里面。请先进入demo03目录，运行下面的命令。

$ mocha --recursive --reporter tap --growl
上面这个命令有三个参数--recursive、--reporter tap、--growl。
然后，把这三个参数写入test目录下的mocha.opts文件。
```
--reporter tap
--recursive
--growl
```
然后，执行mocha就能取得与第一行命令一样的效果。


### 输出模式
mocha --recursive -R doc > spec.html  
mocha --recursive -R markdown > spec.md

使用mochawesome模块，可以生成漂亮的HTML格式的报告。

生成HTML报告
https://www.npmjs.com/package/mochawesome


### it
```js
it.skip("描述文字",()=>{})
it.only("描述文字",()=>{})
it.timeout("描述文字",()=>{})
```
skip
only

### 钩子函数
before()，
after()，
beforeEach()
afterEach()四个钩子函数
## 参考
* [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
* [带你入门带你飞Ⅱ 使用Mocha + Chai + SuperTest测试Restful API in node.js](https://www.cnblogs.com/wade-xu/archive/2015/07/28/4673460.html)
* [Mocha中文文档](https://segmentfault.com/a/1190000011362879)
