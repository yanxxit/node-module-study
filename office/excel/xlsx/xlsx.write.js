const XLSX = require('xlsx');

// 准备数据（二维数组或JSON）
const data = [
	['姓名', '年龄', '城市'],
	['张三', 25, '北京'],
	['李四', 30, '上海']
];

// 创建工作簿和工作表
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(data);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// 写入文件
XLSX.writeFile(workbook, 'input.test.xlsx');
console.log('Excel文件已生成');
