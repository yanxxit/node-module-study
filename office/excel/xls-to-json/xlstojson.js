var node_xj = require("xls-to-json");
node_xj({
    //input: "simple.xls",  // input xls 支持xlsx 和xls
    input: "simple.xlsx",  // input xls
    output: "output.json", // output json
    sheet: "Sheet2"  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});