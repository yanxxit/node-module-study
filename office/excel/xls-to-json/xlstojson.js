var node_xj = require("xls-to-json");
node_xj({
    //input: "simple.xls",  // input xls 支持xlsx 和xls
    input: "tzgoods_20181010.xlsx",  // input xls
    output: "tzgoods_20181010.json", // output json
    sheet: "Sheet1"  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
