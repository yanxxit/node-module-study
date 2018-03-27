# test
代码部署之前，进行一定的单元测试是十分必要的，这样能够有效并且持续保证代码质量。而实践表明，高质量的单元测试还可以帮助我们完善自己的代码。这篇博客将通过一些简单的测试案例，介绍几款Node.js测试模块: Mocha和Should，SuperTest。本文侧重于解释原理，各个模块的详细使用案例以后单独再聊。


发现一个有趣的现象，我们写代码的时候很容易陷入思维漏洞，而写测试的时候往往会考虑各种情况，这就是所谓的TDD（Test-Driven-Development: 测试驱动开发）的神奇之处。因此，进行一定的单元测试是十分必要的:

- 验证代码的正确性
- 避免修改代码时出错
- 避免其他团队成员修改代码时出错
- 便于自动化测试与部署

## Mocha 测试框架

* it
it函数的第1个参数为字符串，用于描述测试，一般会写期望得到的结果，例如"should return 3"; 而第2个参数为函数，用于编写测试代码，一般是先调用被测试的函数或者API，获取结果之后，使用断言库判断执行结果是否正确。

我们按照Mocha的it函数编写一个个测试案例，然后Mocha负责执行这些案例；当assert.equal断言成功时，则测试案例通过；当assert.equal断言失败时，抛出AssertionError，Mocha能够捕获到这些异常，然后对应的测试案例失败。

## Should 断言库

## SuperTest
>   SuperTest封装了发送HTTP请求的接口，并且提供了简单的expect断言来判定接口返回结果。对于POST接口，使用SuperTest的优势将更加明显，因为使用Node.js的http模块发送POST请求是很麻烦的。

Node.js是用于后端开发的语言，而后端开发其实很大程度上等价于编写HTTP接口，为前端提供服务。那么，Node.js单元测试则少不了对HTTP接口进行测试。
```js
var request = require("supertest");
var server = require("../server.js");
var assert = require("assert");
it("should return hello fundebug", function(done)
{
    request(server)
        .get("/")
        .expect(200)
        .expect(function(res)
        {
            assert.equal(res.text, "Hello Fundebug");
        })
        .end(done);
});
```
Mocha在测试异步代码是需要为it函数添加回调函数done，在断言结束的地方调用done，这样Mocha才能知道什么时候结束这个测试。
## 二八原则
本文所写的单元测试案例，都很简单。然而，在实际工作中，单元测试是一个很头痛的事情。修改了代码有时意味着必须修改单元测试，写了新的函数或者API就得写新的单元测试。如果较真起来，单元测试可以没完没了地写，但这是没有意义的。而根据二八原理，20%的测试可以解决80%的问题。剩下的20%问题，事实上我们是力不从心的。换句话说，想通过测试消除所有BUG，是不现实的。

1. 测试的方式有千万种，这几种就可以满足大多数情况，针对合适的场景进行尝试