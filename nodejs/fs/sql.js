const fs = require('fs');

//fs.writeFile('insert.sql', 'select * from table', {encoding: 'utf-8'}, (err) => {
//    if (err) throw err;
//    console.log('It\'s saved!');
//});

fs.appendFile('insert.sql', 'select * from table \n', function () {
    console.log('追加内容完成');
});
