var fs = require('fs');
var res = [];

res.push(fs.readdirSync('app/')); // read subfolders - returns ['view'] array
res.push(fs.rmdirSync('app/view/')); // remove 'view' folder
res.push(fs.readdirSync('app/')); // read subfolders - returns ['view'] array instead of empty one

console.log(res);