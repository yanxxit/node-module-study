# 使用Node.js给图片加水印的方法
https://github.com/zhangyuanwei/node-images
使用Node.js给图片加水印，首先要确保本地安装了node环境。然后，我们进行图像编辑操作需要用到一个Node.js的库：images。具体详情大家可以通过本文了解下
## 一、准备工作：
首先，确保你本地已经安装好了node环境。
然后，我们进行图像编辑操作需要用到一个Node.js的库：images。
这个库的地址是：https://github.com/zhangyuanwei/node-images，作者定义它为 “Node.js轻量级跨平台图像编解码库” ，并提供了一系列接口。
我们要做的首先是安装images库：
npm install images
## 二、直接上DEMO：
步骤如下：
### step1：文件夹结构
![demo](http://files.jb51.net/file_images/article/201611/20161115164801149.jpg?20161015164814)
### step2：JS代码
```
var images = require('images');
var path = require('path');
var watermarkImg = images('water_logo.png');
var sourceImg = images('source.png');
// 比如放置在右下角，先获取原图的尺寸和水印图片尺寸
var sWidth = sourceImg.width();
var sHeight = sourceImg.height();
var wmWidth = watermarkImg.width();
var wmHeight = watermarkImg.height();
images(sourceImg)
// 设置绘制的坐标位置，右下角距离 40px
.draw(watermarkImg, sWidth - wmWidth - 40, sHeight - wmHeight - 40)
// 保存格式会自动识别
.save('saveimg.png');
```
### step3：运行node app命令
![demo](http://files.jb51.net/file_images/article/201611/20161115164835771.jpg?20161015164846)
### step4：运行node命令后，文件夹结构如下图
![demo](http://files.jb51.net/file_images/article/201611/20161115164906639.jpg?20161015164915)
### step5：最终生成的加水印图片
![demo](http://files.jb51.net/file_images/article/201611/20161115164953693.png?2016101516501)
以上所述是小编给大家介绍的使用Node.js给图片加水印的方法，希望对大家有所帮助，如果大家有任何疑问请给我留言，小编会及时回复大家的。在此也非常感谢大家对脚本之家网站的支持！