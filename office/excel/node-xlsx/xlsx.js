const ModelClass = require('./ModelClass');
const fs = require('fs');
var xlsx = require('node-xlsx');
const moment = require('moment')
const uuid = require('node-uuid');
const client = new ModelClass('127.0.0.1', 'root', 'root', 'shdx', '3306');


var strsql = "select * from dx_order_sub where `status`=100 and res=100 and workname like '%||%' limit 50";


client.ExecSql(strsql, function (err, data) {
    if (err) {
        console.log(err)
    } else {

        var list = [];
        for (var i in data) {
            var arr = [];
            var value = data[i];
            for (var j in value) {
                arr.push(value[j]);
            }
            list.push(arr);
        }

        var buffer = xlsx.build([
            {
                name: 'sheet1',
                data: list
            }
        ]);

        //将文件内容插入新的文件中
        fs.writeFileSync('data.xlsx', buffer, {'flag': 'w'});
    }
});