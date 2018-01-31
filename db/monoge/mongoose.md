<!-- TOC -->

- [mongoose](#mongoose)
    - [目标问题](#%E7%9B%AE%E6%A0%87%E9%97%AE%E9%A2%98)
    - [mongodb](#mongodb)
    - [mongoose 名词解析](#mongoose-%E5%90%8D%E8%AF%8D%E8%A7%A3%E6%9E%90)
        - [Schema 定义数据库的结构（数据结构模型）](#schema-%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E7%BB%93%E6%9E%84%EF%BC%88%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%A8%A1%E5%9E%8B%EF%BC%89)
        - [Model 数据对象](#model-%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1)
        - [Entity 数据实体](#entity-%E6%95%B0%E6%8D%AE%E5%AE%9E%E4%BD%93)
    - [install](#install)
    - [require](#require)
    - [connect 建立连接](#connect-%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5)
    - [Schema](#schema)
    - [Model](#model)
        - [mongoose.model()](#mongoosemodel)
    - [自定义方法](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95)
        - [内置方法](#%E5%86%85%E7%BD%AE%E6%96%B9%E6%B3%95)
            - [schema.methods 实例方法](#schemamethods-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)
            - [schema.statics 静态方法](#schemastatics-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
            - [schema.query 查询方法](#schemaquery-%E6%9F%A5%E8%AF%A2%E6%96%B9%E6%B3%95)
    - [文档新增](#%E6%96%87%E6%A1%A3%E6%96%B0%E5%A2%9E)
        - [save](#save)
        - [create](#create)
        - [insertMany](#insertmany)
    - [文档查询](#%E6%96%87%E6%A1%A3%E6%9F%A5%E8%AF%A2)
        - [find() 　现在，使用find()方法找出所有数据](#find-%E7%8E%B0%E5%9C%A8%EF%BC%8C%E4%BD%BF%E7%94%A8find%E6%96%B9%E6%B3%95%E6%89%BE%E5%87%BA%E6%89%80%E6%9C%89%E6%95%B0%E6%8D%AE)
        - [findById()](#findbyid)
        - [findOne() 该方法返回查找到的所有实例的第一个](#findone-%E8%AF%A5%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E6%9F%A5%E6%89%BE%E5%88%B0%E7%9A%84%E6%89%80%E6%9C%89%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA)
        - [文档查询中，](#%E6%96%87%E6%A1%A3%E6%9F%A5%E8%AF%A2%E4%B8%AD%EF%BC%8C)
        - [常用的查询条件如下](#%E5%B8%B8%E7%94%A8%E7%9A%84%E6%9F%A5%E8%AF%A2%E6%9D%A1%E4%BB%B6%E5%A6%82%E4%B8%8B)
    - [文档更新](#%E6%96%87%E6%A1%A3%E6%9B%B4%E6%96%B0)
        - [updateMany()](#updatemany)
        - [find() + save()](#find-save)
        - [updateOne()](#updateone)
        - [findOne() + save()](#findone-save)
        - [findOneAndUpdate()](#findoneandupdate)
        - [findByIdAndUpdate](#findbyidandupdate)
    - [文档删除](#%E6%96%87%E6%A1%A3%E5%88%A0%E9%99%A4)
        - [remove()](#remove)
        - [findOneAndRemove()](#findoneandremove)
        - [findByIdAndRemove()](#findbyidandremove)
    - [前后钩子](#%E5%89%8D%E5%90%8E%E9%92%A9%E5%AD%90)
        - [pre()](#pre)
        - [post()](#post)
    - [查询后处理](#%E6%9F%A5%E8%AF%A2%E5%90%8E%E5%A4%84%E7%90%86)
        - [sort()](#sort)
        - [skip()](#skip)
        - [limit()](#limit)
        - [select()](#select)
        - [count()](#count)
        - [distinct() 去重](#distinct-%E5%8E%BB%E9%87%8D)
    - [文档验证](#%E6%96%87%E6%A1%A3%E9%AA%8C%E8%AF%81)
    - [func list](#func-list)
        - [索引](#%E7%B4%A2%E5%BC%95)
    - [常见问题](#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
- [reference](#reference)

<!-- /TOC -->
# mongoose
Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具

## 目标问题
1. mongoose 在脑海中建立模型
2. mongodb 基本概念
3. 简单的增删改查
4. 索引相关的内容
5. 大批量数据处理相关的内容。
6. 记录用的比较多的用法，少的，可以忽略


引申:
1. 对常用知识点的基础概念要明白
2. 开始


## mongodb
mongodb node.js 操作mongodb的一个驱动。
mongoose 依赖mongodb
```
npm install mongodb
```
不需要单独安装，因为安装mongoose时，会自动安装的

## mongoose 名词解析
Mongooose中，有三个比较重要的概念，分别是Schema、Model、Entity。它们的关系是：Schema生成Model，Model创造Document，Model和Document都可对数据库操作造成影响，但Model比Document更具操作性

### Schema 定义数据库的结构（数据结构模型）
一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
Schema用于定义数据库的结构。
类似创建表时的数据定义(不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、静态模型方法、复合索引等)，每个Schema会映射到mongodb中的一个collection，Schema不具备操作数据库的能力
### Model 数据对象
由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
Model是由Schema编译而成的构造器，具有抽象属性和行为，可以对数据库进行增删查改。Model的每一个实例（instance）就是一个文档document
### Entity 数据实体
由Model创建的实体，他的操作也会影响数据库

1.本学习文档采用严格命名方式来区别不同对象，例如：

```js
var PersonSchema;   //Person的文本属性
var PersonModel;    //Person的数据库模型
var PersonEntity;   //Person实体
```
2.Schema、Model、Entity的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。

## install
```sh
npm install --save mongoose
yarn add mongoose
```

## require

```js
var mongoose = require("mongoose");
```
## connect 建立连接
连接方式
```js
//最简单的使用方式，就是只要传入url参数即可
mongoose.connect('mongodb://localhost/db1');
//如果还需要传递用户名、密码，则可以使用如下方式
mongoose.connect('mongodb://username:password@host:port/database?options...');

//如果要连接多个数据库，只需要设置多个url以,隔开，同时设置mongos为true
mongoose.connect('urlA,urlB,...', {
   mongos : true 
})
//connect()函数还接受一个回调参数
mongoose.connect(uri, options, function(error) {

});
使用disconnect()方法可以断开连接
mongoose.disconnect()
//还可接受一个选项对象options，该对象将传递给底层驱动程序。这里所包含的所有选项【优先于】连接字符串中传递的选项
mongoose.connect(uri, options);
```　　
可用选项options 解读

* db            -数据库设置
* server        -服务器设置
* replset       -副本集设置，暂未用到
* user          -用户名
* pass          -密码
* auth          -鉴权选项
* mongos        -连接多个数据库，可以尝试一下。
* promiseLibrary

实例：
```js
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' },
  user: 'myUserName',
  pass: 'myPassword'
}
mongoose.connect(uri, options);
```

## Schema
Schema主要用于定义MongoDB中集合Collection里文档document的结构　　
定义Schema非常简单，指定字段名和类型即可，支持的类型包括以下8种

* String      字符串
* Number      数字    
* Date        日期
* Buffer      二进制//todo 需要了解
* Boolean     布尔值
* Mixed       混合类型//需要记住
* ObjectId    对象ID//需要记住
* Array       数组//需要记住

通过mongoose.Schema来调用Schema，然后使用new方法来创建schema对象 
```js
var mongoose = require('mongoose');

var mySchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```
[注意]创建Schema对象时，声明字段类型有两种方法，一种是首字母大写的字段类型，另一种是引号包含的小写字段类型 

```js
var mySchema = new mongoose.Schema({title:String, author:String});
//或者 
var mySchema = new mongoose.Schema({title:'string', author:'string'});
```

## Model 
模型Model是根据Schema编译出的构造器，或者称为类，通过Model可以实例化出文档对象document
文档document的创建和检索都需要通过模型Model来处理

### mongoose.model()

使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称

注意：
1. Mongoose会将集合名称设置为模型名称的小写版。
2. 如果名称的最后一个字符是字母，则会变成复数；
3. 如果名称的最后一个字符是数字，则不变；
4. 如果模型名称为"MyModel"，则集合名称为"mymodels"；
5. 如果模型名称为"Model1"，则集合名称为"model1"

```js
var schema = new mongoose.Schema({ num:Number, name: String, size: String});
//一定要将model()方法的第一个参数和其返回值设置为相同的值，否则会出现不可预知的结果
var MyModel = mongoose.model('MyModel', schema);
//实例化文档document
var doc1 = new MyModel({ size: 'small' });
//文档保存 
//通过new Model1()创建的文档doc1，必须通过save()方法，才能将创建的文档保存到数据库的集合中，集合名称为模型名称的小写复数版
//回调函数是可选项，第一个参数为err，第二个参数为保存的文档对象
doc1.save(function (err,doc) {
//{ __v: 0, size: 'small', _id: 5970daba61162662b45a24a1 }
    console.log(doc);
})

```

## 自定义方法
【实例方法】

### 内置方法
1. save
```js
var schema = new mongoose.Schema({ num: Number, name: String, size: String });
//创建对象赋予的方法
schema.methods.findSimilarSizes = function(cb) {
    return this.model('MyModel').find({ size: this.size }, cb);
}

schema.statics.findByName = function(name, cb) { //静态方法
    return this.find({ name: new RegExp(name, 'i') }, cb);
}

schema.query.byName = function(name) { //查询方法
    return this.find({ name: new RegExp(name) });
}
var MyModel = mongoose.model('MyModel', schema);
var doc1 = new MyModel({ name: 'doc1', size: 'small' });
var doc2 = new MyModel({ name: 'doc2', size: 'small' });
var doc3 = new MyModel({ name: 'doc3', size: 'big' });
doc1.save();
doc2.save();
doc3.save();
setTimeout(function() {
    doc1.findSimilarSizes(function(err, docs) {
        docs.forEach(function(item, index, arr) {
            //doc1
            //doc2
            console.log(item.name)
        })
    });

    MyModel.findByName('doc1', function(err, docs) { //静态方法
        //[ { _id: 5971e68f4f4216605880dca2,name: 'doc1',size: 'small',__v: 0 } ]
        console.log(docs);
    })

    MyModel.find().byName('huo').exec(function(err, docs) { //查询方法
        //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
        // { _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 } ]
        console.log(docs);
    })
}, 0)

```
#### schema.methods 实例方法
Model的实例是document，内置实例方法有很多，如 `save`，可以通过Schema对象的`methods`属性给`实例自定义扩展方法`
#### schema.statics 静态方法
通过Schema对象的statics属性给 Model 添加静态方法
由上所示，实例方法和静态方法的区别在于，静态方法是通过Schema对象的statics属性给model添加方法，实例方法是通过Schema对象的methods是给document添加方法

#### schema.query 查询方法
通过schema对象的query属性，给model添加查询方法


## 文档新增
文档新增有三种方法
1. save()方法
2. model的create()方法
3. model的insertMany()方法

### save
使用save()方法，需要先实例化为文档，再使用save()方法保存文档。
```js
save([options], [options.safe], [options.validateBeforeSave], [fn])
//使用链式写法    
new temp({age:10,name:'save'}).save(function(err,doc){
    //[ { _id: 59720bc0d2b1125cbcd60b3f, age: 10, name: 'save', __v: 0 } ]
    console.log(doc);        
});
```
### create
create()方法，则直接在模型Model上操作，并且可以同时新增多个文档

```js
Model.create(doc(s), [callback])
var schema = new mongoose.Schema({ age: Number, name: String });
var temp = mongoose.model('temp', schema);
temp.create({ name: "xiaowang" }, { name: "xiaoli" }, function(err, doc1, doc2) {
    //{ __v: 0, name: 'xiaowang', _id: 59720d83ad8a953f5cd04664 }
    console.log(doc1);
    //{ __v: 0, name: 'xiaoli', _id: 59720d83ad8a953f5cd04665 }
    console.log(doc2);
});
```
### insertMany
```js
Model.insertMany(doc(s), [options], [callback]) 
var schema = new mongoose.Schema({ age: Number, name: String });
var temp = mongoose.model('temp', schema);
temp.insertMany([{ name: "a" }, { name: "b" }], function(err, docs) {
    //[ { __v: 0, : 'a', _id: 59720ea1bbf5792af824b30c },
    //{ __v: 0, name: 'b', _id: 59720ea1bbf5792af824b30d } ]
    console.log(docs);
});
```
## 文档查询

### find() 　现在，使用find()方法找出所有数据
```js
Model.find(conditions, [projection], [options], [callback])
var schema = new mongoose.Schema({ age: Number, name: String });
var temp = mongoose.model('temp', schema);
```
* 第一个参数表示查询条件
* 第二个参数用于控制返回的字段
* 第三个参数用于配置查询参数
* 第四个参数是回调函数，回调函数的形式为function(err,docs){}

在数据库db1的集合temps中存在如下数据
![数据信息](./img/1.png)
```js
//现在，使用find()方法找出所有数据
temp.find(function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
    //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 18 },
    //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 } ]
    console.log(docs);
})
// 找出年龄大于18的数据
temp.find({ age: { $gte: 18 } }, function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
    //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 18 },
    //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 }]
    console.log(docs);
})
//找出年龄大于18且名字里存在'huo'的数据
temp.find({ name: /huo/, age: { $gte: 18 } }, function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
    //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 }]
    console.log(docs);
})
// 找出名字里存在'a'的数据，且只输出'name'字段
// [注意]_id字段默认输出
temp.find({ name: /a/ }, 'name', function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai' },
    //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang' } ]
    console.log(docs);
})
//如果确实不需要_id字段输出，可以进行如下设置
temp.find({ name: /a/ }, { name: 1, _id: 0 }, function(err, docs) {
    //[ { name: 'huochai' }, { name: 'wang' } ]
    console.log(docs);
})

// 找出跳过前两条数据的其他所有数据
// [注意]如果使用第三个参数，前两个参数如果没有值，需要设置为null
temp.find(null, null, { skip: 2 }, function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 } ]
    console.log(docs);
})
```
### findById()
```js
Model.findById(id, [projection], [options], [callback])

// 显示第0个元素的所有字段
var aIDArr = [];
temp.find(function(err, docs) {
    docs.forEach(function(item, index, arr) {
        aIDArr.push(item._id);
    })
    temp.findById(aIDArr[0], function(err, doc) {
        //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
        console.log(doc);
    })

    temp.findById(aIDArr[0]).exec(function(err, doc) { //以上代码的另一种写法如下
        //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
        console.log(doc);
    })

    temp.findById(aIDArr[0], { name: 1, _id: 0 }, function(err, doc) { //只输出name字段
        //{  name: 'huochai'}
        console.log(doc);
    })

    temp.findById(aIDArr[0], { name: 1, _id: 0 }).exec(function(err, doc) { //或者写成下面这种形式
        //{  name: 'huochai'}
        console.log(doc);
    })

    temp.findById(aIDArr[0], { lean: true }, function(err, doc) { //输出最少的字段
        //{ _id: 5971f93be6f98ec60e3dc86c }
        console.log(doc);
    })
    temp.findById(aIDArr[0], { lean: true }).exec(function(err, doc) {
        //{ _id: 5971f93be6f98ec60e3dc86c }
        console.log(doc);
    })
})
```
### findOne() 该方法返回查找到的所有实例的第一个
```js
Model.findOne([conditions], [projection], [options], [callback])
// 找出age>20的文档中的第一个文档
temp.findOne({ age: { $gt: 20 } }, function(err, doc) {
        //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
        console.log(doc);
    })
    //找出age>20的文档中的第一个文档，且只输出name字段

temp.findOne({ age: { $gt: 20 } }, { name: 1, _id: 0 }).exec(function(err, doc) {
    //{ name: 'huochai' }
    console.log(doc);
})

//找出age>20的文档中的第一个文档，且输出包含name字段在内的最短字段
temp.findOne({ age: { $gt: 20 } }, "name").lean().exec(function(err, doc) {
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai' }
    console.log(doc);
})
```
### 文档查询中，

### 常用的查询条件如下
```
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　小于
$lte　　　 小于等于
$ne　　　　不等于
$in　　　　在多个值范围内
$nin　　　 不在多个值范围内
$all　　　 匹配数组中多个值
$regex　　 正则，用于模糊查询
$size　　　匹配数组大小
$maxDistance　范围查询，距离（基于LBS）
$mod　　　　取模运算
$near　　　 邻域查询，查询附近的位置（基于LBS）
$exists　　 字段是否存在
$elemMatch　匹配内数组内的元素
$within　　　范围查询（基于LBS）
$box　　　　 范围查询，矩形范围（基于LBS）
$center　　　范围醒询，圆形范围（基于LBS）
$centerSphere　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素
```

【$where】
如果要进行更复杂的查询，需要使用$where操作符，$where操作符功能强大而且灵活，它可以使用任意的JavaScript作为查询的一部分，包含JavaScript表达式的字符串或者JavaScript函数

```js
// 使用字符串
temp.find({ $where: "this.x == this.y" }, function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})
temp.find({ $where: "obj.x == obj.y" }, function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})　　

//使用函数
temp.find({
    $where: function() {
        return obj.x !== obj.y;
    }
}, function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
})

temp.find({
    $where: function() {
        return this.x !== this.y;
    }
}, function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
})

```
## 文档更新
* update()
* updateMany()
* find() + save()
* updateOne()
* findOne() + save()
* findByIdAndUpdate()
* fingOneAndUpdate()

###【update()】
第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数

```js
Model.update(conditions, doc, [options], [callback])
```
options有如下选项

* safe (boolean)： 默认为true。安全模式。
* upsert (boolean)： 默认为false。如果不存在则创建新记录。
* multi (boolean)： 默认为false。是否更新多个查询记录。
* runValidators： 如果值为true，执行Validation验证。
* setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
* strict (boolean)： 以strict模式进行更新。
* overwrite (boolean)： 默认为false。

常见操作
```js
var schema = new mongoose.Schema({ age: Number, name: String });
var temp = mongoose.model('temp', schema);
// 现在使用update()方法查询age大于20的数据，并将其年龄更改为40岁
//经过以上操作，数据库结果如下。只有第一个数据更改为40岁。而第三个数据没有发生变化
temp.update({ age: { $gte: 20 } }, { age: 40 }, function(err, raw) {
    //{ n: 1, nModified: 1, ok: 1 }
    console.log(raw);
})

// 如果要同时更新多个记录，需要设置options里的multi为true。下面将名字中有'a'字符的年龄设置为10岁
temp.update({ name: /a/ }, { age: 10 }, { multi: true }, function(err, raw) {
    //{ n: 2, nModified: 2, ok: 1 }
    console.log(raw);
})

// 如果设置的查找条件，数据库里的数据并不满足，默认什么事都不发生
temp.update({ age: 100 }, { name: "hundred" }, function(err, raw) {
    //{ n: 0, nModified: 0, ok: 1 }
    console.log(raw);
})

// 如果设置options里的upsert参数为true，若没有符合查询条件的文档，mongo将会综合第一第二个参数向集合插入一个新的文档
temp.update({ age: 100 }, { name: "hundred" }, { upsert: true }, function(err, raw) {
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c202d46b621fca7fc8c7 } ], ok: 1 }
    console.log(raw);
})

temp.update({ name: /aa/ }, { age: 0 }, { upsert: true }, function(err, raw) {
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c288d46b621fca7fdd8f } ], ok: 1 }
    console.log(raw);
})

//[注意]update()方法中的回调函数不能省略，否则数据不会被更新。如果回调函数里并没有什么有用的信息，则可以使用exec()简化代码
temp.update({ name: /aa/ }, { age: 0 }, { upsert: true }).exec();
```
### updateMany()
```js
// updateMany()与update()方法唯一的区别就是默认更新多个文档，即使设置{multi:false}也无法只更新第一个文档
// Model.updateMany(conditions, doc, [options], [callback])
// 将数据库中名字中带有'huo'的数据，年龄变为50岁
temp.updateMany({ name: /huo/ }, { age: 50 }, function(err, raw) {
    //{ n: 2, nModified: 2, ok: 1 }
    console.log(raw);
});
```

### find() + save()
如果需要更新的操作比较复杂，可以使用find()+save()方法来处理，比如找到年龄小于30岁的数据，名字后面添加'30'字符
```js
temp.find({ age: { $lt: 20 } }, function(err, docs) {
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 10 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 }]
    console.log(docs);
    docs.forEach(function(item, index, arr) {
            item.name += '30';
            item.save();
        })
        //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang30', age: 10 },
        // { _id: 5971f93be6f98ec60e3dc86f, name: 'li30', age: 12 }]
    console.log(docs);
});
```
### updateOne()
updateOne()方法只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档
将数据库中名字中带有'huo'的数据，年龄变为60岁
```js
temp.updateOne({ name: /huo/ }, { age: 60 }, function(err, raw) {
    //{ n: 1, nModified: 1, ok: 1 }
    console.log(raw);
});
```
### findOne() + save()
如果需要更新的操作比较复杂，可以使用findOne()+save()方法来处理，比如找到名字为'huochai'的数据，年龄加100岁
```js
temp.findOne({ name: 'huochai' }, function(err, doc) {
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 10 }
    console.log(doc);
    doc.age += 100;
    doc.save();
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 110 }
    console.log(doc);
});

```
### findOneAndUpdate()
fineOneAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}
`Model.findOneAndUpdate([conditions], [update], [options], [callback])`
### findByIdAndUpdate
fineByIdAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}
`Model.findOneAndUpdate([conditions], [update], [options], [callback])`

## 文档删除
有三种方法用于文档删除
### remove()
remove有两种形式，一种是文档的remove()方法，一种是Model的remove()方法
下面介绍Model的remove()方法，该方法的第一个参数conditions为查询条件，第二个参数回调函数的形式如下function(err){}　　
```js
model.remove(conditions, [callback])
// 删除数据库中名称包括'30'的数据
temp.remove({name:/30/},function(err){})
// [注意]remove()方法中的回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码
temp.remove({name:/30/}).exec()
// 下面介绍文档的remove()方法，该方法的参数回调函数的形式如下function(err,doc){}

document.remove([callback])
// 删除数据库中名称包含'huo'的数据
// [注意]文档的remove()方法的回调函数参数可以省略
temp.find({name:/huo/},function(err,doc){
    doc.forEach(function(item,index,arr){
        item.remove(function(err,doc){
            //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 30 }
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 60 }
            console.log(doc);
        })
    })
})  

```
### findOneAndRemove()
model的remove()会删除符合条件的所有数据，如果只删除符合条件的第一条数据，则可以使用model的findOneAndRemove()方法
```js
Model.findOneAndRemove(conditions, [options], [callback])
// 现在删除第一个年龄小于20的数据
temp.findOneAndRemove({age:{$lt:20}},function(err,doc){
    //{ _id: 5972d3f3e6f98ec60e3dc873, name: 'wang', age: 18 }
    console.log(doc);
})
// 与model的remove()方法相同，回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码

temp.findOneAndRemove({age:{$lt:20}}).exec()
```

### findByIdAndRemove()
Model.findByIdAndRemove(id, [options], [callback])
## 前后钩子
前后钩子即pre()和post()方法，又称为中间件，是在执行某些操作时可以执行的函数。中间件在schema上指定，类似于静态方法或实例方法等

可以在数据库执行下列操作时，设置前后钩子

* init
* validate
* save
* remove
* count
* find
* findOne
* findOneAndRemove
* findOneAndUpdate
* insertMany
* update

### pre()
以find()方法为例，在执行find()方法之前，执行pre()方法
```js
var schema = new mongoose.Schema({ age: Number, name: String, x: Number, y: Number });
schema.pre('find', function(next) {
    console.log('我是pre方法1');
    next();
});
schema.pre('find', function(next) {
    console.log('我是pre方法2');
    next();
});
var temp = mongoose.model('temp', schema);
temp.find(function(err, docs) {
    console.log(docs[0]);
})

//我是pre方法1
//我是pre方法2
//{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }
```

### post()
post()方法并不是在执行某些操作后再去执行的方法，而在执行某些操作前最后执行的方法，post()方法里不可以使用next()
```js
var schema = new mongoose.Schema({ age: Number, name: String, x: Number, y: Number });
schema.post('find', function(docs) {
    console.log('我是post方法1');
});
schema.post('find', function(docs) {
    console.log('我是post方法2');
});
var temp = mongoose.model('temp', schema);
temp.find(function(err, docs) {
    console.log(docs[0]);
})

//我是post方法1
//我是post方法2
//{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }

```
## 查询后处理
常用的查询后处理的方法如下所示
* sort     排序
* skip     跳过
* limit    限制
* select   显示字段
* exect    执行
* count    计数
* distinct 去重

```js
var schema = new mongoose.Schema({ age: Number, name: String, x: Number, y: Number });
var temp = mongoose.model('temp', schema);
temp.find(function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})
```
### sort()
```js
// 按age从小到大排序
temp.find().sort("age").exec(function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
});
// 按x从小到大，age从大到小排列
temp.find().sort("x -age").exec(function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{  _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});
```
### skip()
跳过1个，显示其他
```js
temp.find().skip(1).exec(function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});
```
### limit()
现在只显示2个
temp.find().limit(2).exec(function(err, docs) {
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 } ]
    console.log(docs);
});
### select()
显示name、age字段，不显示_id字段
```js
temp.find().select("name age -_id").exec(function(err, docs) {
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
});
temp.find().select({ name: 1, age: 1, _id: 0 }).exec(function(err, docs) {
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
});
//下面将以上方法结合起来使用，跳过第1个后，只显示2个数据，按照age由大到小排序，且不显示_id字段
temp.find().skip(1).limit(2).sort("-age").select("-_id").exec(function(err, docs) {
    //[ { name: 'huochai', age: 27, x: 1, y: 2 },
    //{ name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});
```
### count()
显示集合temps中的文档数量
```js
temp.find().count(function(err, count) {
    console.log(count); //4
});
```
### distinct() 去重
返回集合temps中的x的值
```js
temp.find().distinct('x', function(err, distinct) {
    console.log(distinct); //[ 1, 2 ]
});
```
## 文档验证
为什么需要文档验证呢？以一个例子作为说明，schema进行如下定义

如果不进行文档验证，保存文档时，就可以不按照Schema设置的字段进行设置，分为以下几种情况
1. 缺少字段的文档可以保存成功
2. 包含未设置的字段的文档也可以保存成功，未设置的字段不被保存
3. 包含字段类型与设置不同的字段的文档也可以保存成功，不同字段类型的字段被保存为设置的字段类型
而通过文档验证，就可以避免以下几种情况发生

文档验证在SchemaType中定义，格式如下
`{name: {type:String, validator:value}}`
* required: 数据必须填写
* default: 默认值
* validate: 自定义匹配
* min: 最小值(只适用于数字)
* max: 最大值(只适用于数字)
* match: 正则匹配(只适用于字符串)
* enum:  枚举匹配(只适用于字符串)

```js
var schema = new mongoose.Schema({ age:{type:Number,required:true}, name: String,x:Number,y:Number});  
var temp = mongoose.model('temp', schema);
new temp({name:"abc"}).save(function(err,doc){
    //Path `age` is required.
    console.log(err.errors['age'].message);
});
```
## func list
1. 查询:模糊匹配
2. 查询某个节点
3. 插入唯一
4. 失效时间
5. 查询优化

### 索引

## 常见问题
1. 如何遍历一遍mongodb 中的数据
2. 

# reference
- [mongoose-github](https://github.com/Automattic/mongoose)
- [mongoose官方网址](http://mongoosejs.com/)
- [mongoose官方文档]http://mongoosejs.com/docs/guide.html)
- [mongoose 文档](http://www.nodeclass.com/api/mongoose.html)

- [Mongoose学习参考文档——基础篇](http://ourjs.com/detail/53ad24edb984bb4659000013)
- [参考](https://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral)