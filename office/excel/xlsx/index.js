/**
 * 转换 excel 为 HTML 文件
 *
 * @file xlsx2json.js
 * @author mystorp@gmail.com
 *
 */

var fs = require('fs'),
    xlsx = require('xlsx');

/**
 * 解析 excel 为 JSON 对象，每个 excel 有多个 sheet 页，
 * 每个 sheet 页里面有多行数据，每行数据有多列，最终 sheet
 * 的数据存储为二维数组。
 * 返回格式：
 * {
 *     "Sheet 1": [
 *          [col1, col2, col3, ...],//第一行数据
 *          [col1, col2, col3, ...],//第二行数据
 *          ...
 *     ],
 *     "Sheet 2": []
 * }
 *
 * @param {String} input - 要处理的 excel 源文件
 * @return {Object} 返回
 */
function parse(input) {
    var book = xlsx.readFileSync(input), result = {};
    //循环工作表中的每个 sheet 页
    book.SheetNames.forEach(function(name){
        //拿到当前 sheet 页对象
        var sheet = book.Sheets[name],
            //得到当前页内数据范围
            range = xlsx.utils.decode_range(sheet['!ref']),
            //保存数据范围数据
            row_start = range.s.r, row_end = range.e.r,
            col_start = range.s.c, col_end = range.e.c,
            rows = [], row_data, i, addr, cell;
        //按行对 sheet 内的数据循环
        for(;row_start<=row_end;row_start++) {
            row_data = [];
            //读取当前行里面各个列的数据
            for(i=col_start;i<=col_end;i++) {
                addr = xlsx.utils.encode_col(i) + xlsx.utils.encode_row(row_start);
                cell = sheet[addr];
                //如果是链接，保存为对象，其它格式直接保存原始值
                if(cell.l) {
                    row_data.push({text: cell.v, link: cell.l.Target});
                } else {
                    row_data.push(cell.v);
                }
            }
            rows.push(row_data);
        }
        //保存当前页内的数据
        result[name] = rows;
    });
    return result;
}

/**
 * 根据模板页生成最终的页面
 *
 * @param file 要生成文件的路径
 */
function createPage(file, head, catalogs) {
    var src = fs.readFileSync('template.html', {encoding: 'utf-8'}), o;
    o = {head:head, catalogs: catalogs};
    src = src.replace(/\{(.*?)\}/g, function(_, key){
        return (key in o) ? JSON.stringify(o[key]) : _;
    });
    fs.writeFileSync(file, src);
}

if(module === require.main) {
    var files = [
        {filename: '1.xlsx', text: 'jhs', html: 'index_jhs.html'},
        {filename: '2.xlsx', text: 'tm', html: 'index.html'}
    ];
    var prefix = "./";
    files.forEach(function(c){
        var result = parse(c.filename), dir = prefix + c.text, k, catalogs = [], i;
        fs.existsSync(dir) || fs.mkdirSync(dir);
        i = 1;
        for(k in result) {
            fs.writeFileSync(dir + '/' + i + '.json', JSON.stringify(result[k]));
            catalogs.push([k, i]);
            i++;
        }
        createPage(prefix + c.html, c, catalogs);
    });
}