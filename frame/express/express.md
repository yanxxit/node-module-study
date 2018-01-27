# express

## 自定义错误 errorhandler
```
var errorhandler = require('errorhandler')
var express  = require('express')
var app = express();
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}
```