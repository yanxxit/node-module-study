title: node.js
speaker: yanxxit
url: http://blog.yxxit.com
transition: 转场效果，例如：zoomin/cards/slide
files: /js/demo.js

[slide data-on-keypress="globalCallbackName"]

# 为什么选择node
## 为什么选择node

> “JavaScript 是世界上使用最广泛的语言，没有之一，包括后端开发工程师也更爱使用 JavaScript。”  ——stackoverflow

* node.js 语言特点
* NodeJS的优点
* 适合NodeJS的场景
* NodeJS的缺点
* 当前生态
* 所谓全栈
* 效率
* 质量
* 管理
* 结尾

[slide]
## node.js 语言特点
1. 它是一个Javascript运行环境

2. 依赖于Chrome V8引擎进行代码解释

3. 事件驱动

4. 非阻塞I/O

5. 轻量、可伸缩，适于实时数据交互应用

6. 单进程，单线程

[slide]
## NodeJS的优点
1. 高并发（最重要的优点）

2. 适合I/O密集型应用

3. RESTful API

> 这是NodeJS最理想的应用场景，可以处理数万条连接，本身没有太多的逻辑，只需要请求API，组织数据进行返回即可。它本质上只是从某个数据库中查找一些值并将它们组成一个响应。由于响应是少量文本，入站请求也是少量的文本，因此流量不高，一台机器甚至也可以处理最繁忙的公司的API需求。

[slide]
4 大量Ajax请求的应用

> 例如个性化应用，每个用户看到的页面都不一样，缓存失效，需要在页面加载的时候发起Ajax请求，NodeJS能响应大量的并发请求。　　

5. 总而言之，NodeJS适合运用在高并发、I/O密集、少量业务逻辑的场景。

6. Node.js的其他方向
> 除了Web应用外，NodeJS也被应用在许多方面，本文盘点了NodeJS在其它方面所开发的十大令人神奇的项目，这些项目涉及到应用程序监控、媒体流、远程控制、桌面和移动应用等等

[slide]

## NodeJS的缺点：

1. 不适合CPU密集型应用；
> CPU密集型应用给Node带来的挑战主要是：由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起；
2. 解决方案：分解大型运算任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起；
> (但是，我们当前业务暂时没有CPU密集型应用，而且针对与前端业务，也不存在高CPU密集型应用)
3. 只支持单核CPU，不能充分利用CPU，但是可以通过pm2等来使用多核。


[slide]

## 当前生态
1. 模块很多:50万个模块
2. 支持mongodb，redis,mysql 等主流数据库
3. 原生支持json格式，其他语言还需要解析。
4. 原生支持异步。（对比go语言，高并发，支持多线程多核）

[slide]
## 所谓全栈

### web:
```
* express
* koa
* thinkjs
```

### pc:
```
nw.js --> 钉钉
Electron-->
1. Atom 编辑器
2. Slack (那个独角兽公司）
3. Visual Studio Code
4. WordPress -- [WordPress 4.3 将用 Node.js 重写 - 开源中国社区](http://www.oschina.net/news/61994/wordpress-4-3-will-be-rewritten-in-node-js)
```

[slide]
## 效率
1. node.js 本身自带服务器，技术没有nginx，Apache等服务器也是可以运行开发
2. node.js 做前端，前后端语言同时都是js,对于我们来说学习成本比较低
3. node.js 原生支持json 不需要解析转码
4. node.js 有很多高效的模块，webpack,gulp,

[slide]
## 质量
1. node.js 开发比较灵活
2. node.js + 良好的开发规范
3. 有很多测试模块，例如：mocha
```
1 should.js（https://github.com/shouldjs/should.js） BDD style shown throughout these docs (BDD模式，本文档用的都是这个断定库) 
2 better-assert（https://github.com/tj/better-assert） c-style self-documenting assert()（C-模型下的断定库） 
3 expect.js （https://github.com/Automattic/expect.js）expect() style assertions （expect模式的断定库） 
4 unexpected（http://unexpected.js.org/） the extensible BDD assertion toolkit 
5 chai（https://github.com/chaijs） expect(), assert() and should style assertions
```

[slide]
## 管理

1. 前后端相同的代码，不需要技术栈转换
2. node方便部署，在线上拉取，直接npm install 就可以安装所需的模块。


[slide]

## 结尾
###  相对于其他语言

node.js 发布时间：2009年5月
golang  发布时间：2009年

同时间出现的，但是node.js 却比golong 热呢？

其实NodeJS能实现几乎一切的应用，我们考虑的点只是适不适合用它来做。

![图片](http://img1.tuicool.com/aIb63yA.jpg!web)

[slide]

[slide]
![图片](http://img0.tuicool.com/aeUR7v.jpg!web)
## 参考

- [NodeJS无所不能：细数十个令人惊讶的NodeJS开源项目](http://www.searchsoa.com.cn/showcontent_79099.htm)
- [全栈之路](http://www.tuicool.com/articles/zayMRn7)

- [成功案例]()
- [分布式](http://cnodejs.org/topic/56ab1eb524b0c1ec628ff084)


go 

sys-getinfo

前端安全第一


consul by 

www.grpc.io

prometheus.io



kelude.crp

持续集成

去ioe

https://crp.aliyun.com/
