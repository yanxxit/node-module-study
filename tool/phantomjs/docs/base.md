# phantomjs 常用语法

## webpage:如你所见，上面的例子我们已经见识了它的威力了。它的作用主要是提供了一套可以访问和操作web文档的核心方法，包括操作DOM、事件捕获、用户事件模拟等等。

## system:该模块提供了一些与操作系统相关的接口，例如访问操作系统信息、访问系统环境变量、接受命令行参数等等与程序执行相关的系统信息。
## fs:即FileSystem。熟悉NodeJS的朋友都知道，NodeJS也内建了相关的核心模块。fs提供了执行文件I/O操作的标准接口，如读写文件、删除文件等。它使得你持久化一些文件（如logfile等）变得非常容易。

## webserver:如其名字一样，你可以基于它来实现自己的webserver，用来处理请求并且执行PhantomJS代码等。

## PhantomJS 命令
```
phantomjs [switches] [options] [script] [argument [argument [...]]]
```

example
```
phantomjs demo.js

phantomjs --debug=yes demo.js # 打开debug模式（该模式用于开发，可提供必要提示信息)

phantomjs --cookie-file=cookie.txt demo.js # 设置cookie路径：
```

## 操作page content

DOM选择器，常用的getElementById、getElementByClassName、getElementByName、getElementByTagName、querySelector（CSS选择器）。

evaluate函数是个新东西，其实很简单，就是在webpage环境下执行evaluate传入的回调函数，在这里面执行与phantom相关的操作可以避免web页面刺探phantom相关的设置信息。上面的代码就比较简单了，不啰嗦了。


## 模仿用户点击事件：

phantomJS提供了两种模仿点击事件的接口，一个是sendEvent，phantomJS事件触发器；一个是DOM事件触发器。

我们先看看第一个，语法如下：

sendEvent( eventType, Point X, Point Y, button='left' )
eventType: mouseup mousedown mousemove click doubleclick
Point X : 触发事件的X坐标
Point Y: 触发事件的Y坐标

第二个，我们都应该比较熟悉了：

```
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent(
    "click", // 事件类型
    true,
    true,
    window,
    1,
    1, 1, 1, 1, // 事件的坐标
    false, // Ctrl键标识
    false, // Alt键标识
    false, // Shift键标识
    false, // Meta键标识
    0, // Mouse左键
    element); // 目标元素
element.dispatchEvent(evt);
```

## 参考：
- [PhantomJS快速入门](http://www.codesec.net/view/206245.html)
- [phantomjs 简介 - 问题都是可以解决的！](http://blog.csdn.net/tengdazhang770960436/article/details/41320079)
- [http://www.cnblogs.com/Sonet-life/p/5393730.html](http://www.cnblogs.com/Sonet-life/p/5393730.html)
- [http://imweb.io/topic/55e46d8d771670e207a16bdc?utm_source=tuicool](http://imweb.io/topic/55e46d8d771670e207a16bdc?utm_source=tuicool)
- [http://www.infoq.com/cn/articles/practise-of-phantomjs-and-nodejs-in-jingdong](http://www.infoq.com/cn/articles/practise-of-phantomjs-and-nodejs-in-jingdong)

- [http://www.cnblogs.com/ypzh/p/3948465.html](http://www.cnblogs.com/ypzh/p/3948465.html)
- [http://www.jianshu.com/p/9efe08a8e99e](http://www.jianshu.com/p/9efe08a8e99e)

- [https://www.qcloud.com/community/article/743451001489391682](https://www.qcloud.com/community/article/743451001489391682)

- [http://blog.csdn.net/tengdazhang770960436/article/details/41320079](http://blog.csdn.net/tengdazhang770960436/article/details/41320079)


