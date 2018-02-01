var fs = require("fs")
var path = require("path")
var p = console;

var add = {};
fs.readdir("./", function(err, data) {
    console.log(data)
        // return
    data.forEach(function(m, i) {
        if (m.indexOf(".") == -1 && m.indexOf("_book") == -1) {
            add[m] = fs.readdirSync("./" + m).filter(function(name) {
                return name.indexOf("__") == -1
            })
        }
    });

    var summary = '';

    for (var m in add) {
        // summary += `* [${m}](${m})` + "\n"
        summary += `* [${m}](README.md)` + "\n"
        p.log(`* [${m}](${m})`)
        for (var n in add[m]) {
            let t1 = add[m][n].split(".")[0]
            let t2 = add[m][n]
            p.log(`   * [${t1}](${t2})`)
            summary += `   * [${t1}](${m}/${t2})` + "\n"
        }
    }

    p.log("打印结果：----")
    p.log(summary)
    fs.writeFile('summary.md', summary, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    // p.log(add)
})