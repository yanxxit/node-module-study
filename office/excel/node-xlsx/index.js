var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse('./test.xlsx');//配置excel文件的路径
var excelObj = obj[0].data;//excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容
console.log(excelObj);
//一个sheet文档中的内容包含sheet表头 一个excelObj表示一个二维数组，excelObj[i]表示sheet文档中第i+1行的数据集（一行的数据也是数组形式，访问从索引0开始）

var data = [];
for (var i in excelObj) {
    var arr = [];
    var value = excelObj[i];
    for (var j in value) {
        arr.push(value[j]);
    }
    data.push(arr);
}
var buffer = xlsx.build([
    {
        name: 'sheet2',
        data: data
    }
]);

//将文件内容插入新的文件中
fs.writeFileSync('test1.xlsx', buffer, {'flag': 'w'});