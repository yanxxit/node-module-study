nodejs 提供了一个 node-uuid 模块用于生成 uuid:

首先执行：npm install node-uuid

```js
    var uuid = require('node-uuid');
    console.log(uuid.v1())
    console.log(uuid.v4())
```

## 介绍
v1 是基于时间戳生成uuid

v4 是随机生成uuid

### 结果：
    ```
        57af5b10-3a76-11e5-922a-75f42afeee38
        f3917fb9-9bde-4ec1-a7cf-966251b3d22a

        ```