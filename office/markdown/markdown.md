# markdown

Breakdance 是一个将 HTML 转成 Markdown 的 JavaScript 库。具有高度可插入式、灵活和易用的特点。

为什么要用 Breakdance：

可将 HTML 博客文章转成 Markdown 格式

可将 wiki 页面转成 markdown

将 HTML 文档转 markdown

将 HTML 幻灯片转 markdown

示例代码：

```
var breakdance = require('breakdance');
console.log(breakdance('<strong>The freaks come out at night!</strong>'));
//=> '**The freaks come out at night!**'
另外一个相应将 Markdown 转 HTML 的库是 Remarkable。
```


Remarkable 是一个纯 JavaScript 的 Markdown 解析器，解析速度快而且易于扩展。100% 支持 Commonmark