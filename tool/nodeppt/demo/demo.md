title: nodeppt markdown 演示
speaker: Theo Wang
url: https://github.com/ksky521/nodePPT
transition: zoomin
files: /js/demo.js

[slide]

# node.js 开发入门详解
## h1是作为封面用的，内部的都用h2

[slide style="background-image:url('/img/bg1.png')"]

# 背景图片 {:&.flexbox.vleft}
## 使用方法：&#91;slide style="background-image:url('/img/bg1.png')"&#93;

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT

nodeppt：https://github.com/ksky521/nodePPT

[slide]

什么？这些功能还不够用？

极客模式：查看源码的nodeppt.js，相信你会找到牛逼的手机互动（摇一摇换页）功能

查看项目目录ppts获取更多帮助信息

[slide]
## 尝试调用js

<button onclick="demoAlert">点击我有惊喜哦</button> 

[slide style="background-image:url('/img/bg1.png')"]

## 设置背景图片 
* 查看代码 {:&.fadeIn}

```
var temp = {};
temp.show = function(){
	console.log('打印结果');
}

```
{:&.fadeIn}

1. 使用md文件进行书写 {:&.moveIn}
2. md文件各种支持性越来越多了
3. nodeppt sublime插件 静态博客
4. 只是针对与列表
5. 列表显示才会有
6. 图片后面的转换命令还是必须有的，否则不会起到作用

[slide style=background-color:blue]
* 上下左右方向键翻页
    * 列表支持渐显动画 {:&.moveIn}
    * 支持多级列表
    * 这个动画是moveIn

[slide data-transition="vertical3d"]
## 这是一个vertical3d的动画

[slide]
## 显示代码
<div class="file-setting">
    <p>这是html</p>
</div>
<p id="css-demo">这是css样式</p>
<p>具体看下项目中 ppts/demo.md 代码</p>
<script>
    function testScriptTag(){

    }
    console.log(typeof testScriptTag);
</script>
<style>
#css-demo{
    color: red;
}
</style>

[slide]

## 项目总结

1. 一个PPT只需要写一个md文档就可以了 {:&.bounceIn}
2. 一个nodeppt 可以调用本机的自定义图片
3. 需要将PPT打包，生成静态网页
4. 由于转换成了网页，所以支持网页的很多特性
5. nodeppt 支持键盘自定义时间，别如说切换
6. nodeppt 支持js自定义方法