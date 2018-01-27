开发工具
1.WebStorm，毫无疑问非他莫属，跨平台，强大的代码提示，支持Nodejs调试，此外还支持vi编辑模式，这点我很喜欢。
2.做些小型项目用Sublime Text。
3.Browserify：将你的nodejs模块应用到浏览器中
4.nvm:nodejs版本管理工具，你可能会用到多个nodejs版本（如v0.11.x支持generator的nodejs和stable的v0.10.x版本），用它可以方便切换
测试&自动化
1.mocha：一个简单、灵活有趣的 JavaScript 测试框架（类似的还有should，supretest）
2.gruntjs：迄今为止node世界中最流行的构建工具
3.gulp.js：宣称取代gruntjs的东东
4.node-inspector：nodejs代码调试神奇，结合浏览器Chrome-Debug，轻量，方便
5.node-dev：代码改了，还在不断的按Ctrl+C吗？快试试这个工具吧，使用fs.watch()监控项目目录，代码变化后，自动重启项目
6.pm2：替代node-forever的新秀
第三方开发包
1.Edge.js：让.NET和nodejs在同一进程中运行，相互调用（神器的东西啊）
2.Express，优秀的Web开发框架
3.moment，强大的日期处理库
4.cheerio，jQuery核心选择器的实现，可跑在server端，类似jsdom，但比jsdom轻量很多
5.async，异步处理
6.shortid，url友好的unique id
7.log4js，日志记录，稳健的系统离不开日志记录
8.colors，便于在console中输出不同颜色的文本（tinycolor，更轻量级的控制台颜色设置）
9.xmlrpc，方便xml远程过程调用，比如写metaweblog的时候可能会用到
10.commander：编写命令行应用必备，简化各种命令解析操作
11.koa:Express的接班人
12.chokidar：完善的文件、文件夹监控包，解决了fs.watch诸多不完善的地方，可以进行子目录的监控，相当方便
13.axon：消息、常见socket模式的上层实现，简化socket开发，TJ大神作品
14.cron：采用crontab语法的任务计划包
15.open：使用本地应用打开文件或者url
16.term-list：cli辅助选择操作
17.deepmerge: js对象深度合并
18.loadsh，underscore：js常用工具库，对象合并，排序算法，map，reduce等
19.iconv-lite:纯js实现的编码转换库，开发爬虫等场景会经常用到。
20.request: 更简单的发送http请求
21.needle：轻量级的http client模块，集成了iconv-lite，跟request类似
22.superagent：类似request，使用风格跟jQuery神似。
23.mobile-agent: 判断是手机浏览器的访问还是pc端的访问，对做web很有用哦。
24.is-type-of:js辅助库，判断对象的类型
Web框架&工具
1.StrongLoop
2.KeystoneJS
3.CompoundJS
3.Geddy

构建 & 自动化
Webpack对Java应用依赖的所有模块进行静态分析，生成依赖图，然后将它们打包成数个静态文件。
Grunt以将重复耗时的任务自动化。Grunt的生态系统非常大，有超过6010个插件。
Gulp发布于Grunt之后，采用了完全不同的方式，使用Java函数定义任务。它有超过2770个插件，并且提供了更好的控制。
Browserify使得开发者可以在浏览器使用CommonJS模块。开发者像在node环境一样，通过require(‘modules')来组织模块之间的引用和依赖，Browserify将这些依赖打包成浏览器可以直接引用的JS文件。
Brunch非常简单，速度很快。Brunch的配置文件非常简单，入门文档非常详细。Brunch会自动生成Source Map，方便了开发者Debug。
Yeoman可以用于任何编程语言(Java, Python, C#, Java, etc.)。它是前端开发的脚手架，有6213个插件。
IDE & 编辑器
WebStorm是一款强大的Java IDE。它支持多种框架和CSS语言，包括前端，后端，移动端以及桌面应用。WebStorm可以无缝整合第三方工具，例如构建构建、语法检查构建linter等等。它提供了代码补全，实时错误监测，导航，内置控制台，各种插件等一系统功能。
Atom是GitHub团队开发的。开发者可以很容易地对Atom进行自定义。Atom自带了一个包管理工具，代码补全，文件系统浏览器，支持多个平台以及其他有用的功能。
Visual Studio Code是微软开发的IDE，支持Type。它提供了代码补全，语法高亮，支持Git命令等等。另外，它还有非常多的插件。
Brackets是一个轻量级的开源编辑器。它专注于可视化工具，可以帮助开发者开发Web应用。Brackets支持实时预览以及行内编辑。
文档
Swagger提供了一系列规则用于描述API。使用Swagger，可以创建清晰的文档，并且自动化API相关的操作(例如功能测试)。
JSDoc可以根据java文件中注释信息，生成Java应用程序或库、模块的API文档。JSDoc可以用于管理大型项目。
jGrouseDoc 是一个开源工具，可根据Java注释生成类似Jaavdoc 的源码文档。它不仅可以为变量和函数生成文档，还可以为模块等其他元素生成文档。
YUIDoc基于Nodejs，可以将文档中的注释生成API文档。它使用类似于Javadoc与Doxygen的语法，并且支持实时预览，支持各种语言，并且支持标记语言。
Docco 是免费的文档工具，由Literate Coffee编写。它将代码中的注释生成HTML文档。Docco并不限于Java，同时支持Python, Ruby, Clojure等语言。
测试
Jasmine 是一个行为驱动开发(BDD)框架，用于测试Java代码。它不依赖任何第三方模块，也不需要DOM。它的语法非常简单易懂，使得编写测试变得很简单。另外，它也可以用于测试Node.js，Python以及Ruby。
Mocha是一个功能测试框架，用于测试Node.js以及浏览器端Java。作为开发者首选的测试框架，它可以自由的编写测试组，提供详细的测试报告，同时让异步测试非常简单。Mocha通常与断言库Chai来验证测试结果。
PhantomJS用于前端单元测试。由于PhantomJS是一个无界面的Webkit浏览器引擎，与直接使用浏览器测试相比，使用PhantomJS脚本可以运行得更快。它支持各种网页标准，例如JSON, Canvas, DOM操作, SVG以及CSS选择器。
Protractor是一个端到端测试框架，用于测试Angular应用。它是基于WebDriverJS构建的，它可以通过浏览器事件或者原生事件，从而模拟真实用户，来测试应用。
调试
Java Debugger由Mozilla Developer Network (MDN)开发，可以独立用于调试Node.js代码，或者用于其他浏览器。Firefox提供了本地和远程调试功能，并且，Firefox安卓端也用于调试运行在安卓应用。
Chrome Dev Tools提供了一系列工具，可以用于调试Java代码，编辑CSS，以及测试应用性能。
ng-inspector是Firefox，Chrome和Safari浏览器插件，可以帮助开发者开发、理解以及调试AngularJS应用。它提供了实时更新，DOM高亮等功能。
Augury是一个Chrome插件，可以用于调试Angular 2应用。它让开发者可以直接查看应用结构，操作特征以及状态变化。
安全
Snyk是一个付费服务，用于发现、修复和预防Java，Node.js和Ruby应用的已知漏洞。Snyk拥有自己的漏洞库，以及NSP和NIST NVD的漏洞数据。它允许开发者使用它们的补丁和更新来修复这些安全漏洞。
Node Security Project提供了工具用于扫描依赖来监测漏洞。NSP使用自己的漏洞数据，以及来自NIST NVD的漏洞数据。NSP支持集成GitHub和CI软件，实时监测和报警，并且可以提供如何修复Node.js应用漏洞的建议。
RetireJS是一个开源的依赖监测工具。它包含了多个组件，包括命令行工具，Grunt插件，Firefox和Chrome插件，Burp和OWASP ZAP插件。Retirejs从NIST NVD，漏洞追踪系统，博客和邮件列表等手机漏洞数据。
Gemnasium是一个付费工具，不过有免费方案。它支持各种技术，比如Ruby, PHP, Bower, Python和npm。Gemnasium提供很多非常有用的特性，比如自动更新，实时报警以及Slack集成等。
OSSIndex支持多个生态系统(Java, Java和.NET/C#)，以及多个平台，例如NuGet, npm, Bower, Chocolatey, Maven, Composer, Drupal和MSI。它从NVD以及其他来源收集漏洞数据。
代码优化 & 分析
JSLint是一个Web服务，用于验证Java的代码质量。当它诊断到一个问题时，它会返回问题的大致位置和出错信息。JSLint可以分析一些编码规范以及语法错误。
JSHint可以发现Java中的错误以及一些潜在的问题。JSHint是一个静态代码分析工具，旨在帮助开发者编写大型的程序。它可以诊断语法错误、隐形类型转换等问题，但是它并不能确定你的应用是否正确、性能是否足够好、以及是否会发生内存泄漏。 JSHint是JSLint的一个fork。
ESLint是一个开源诊断工具，用于JSX和Java应用。它可以帮助开发者发现可疑的或者不符合特定编程规范的代码。它帮助开发者在没有执行代码之前发现JS代码中问题，节省了不少时间。ESLint由Node.js编写，可以使用NPM安装。
Flow是Java代码静态类型检测器，由Facebook开发。Flow可以在编码时检查到类型错误并做出提示。
包管理
Bower是一个用于管理前端依赖的包管理器，Twitter创建。它提供了大量可供使用的依赖包，帮助Java开发者更方便地管理前端依赖的JS库。
NPM是node package manager的缩写，事实上NPM包可以用于前后端。它是Java包管理系统，也是世界上最大的依赖库，有超过475,000个模块。
Yarn是Facebook, Google, Exponent 和 Tilde 开发的一款新的 Java 包管理工具。与NPM相比，它解决了安全、性能以及一致性问题。
Duo吸取了Component, Browserify和Go的经验，致力于简化大型Web应用的构建过程。
以上就是本文的全部内容，希望对大家的学习有所帮助，也希望大家多多支持脚本之家。