const XLSX = require('xlsx');

// 读取Excel文件
const workbook = XLSX.readFile('input.test.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 转换为JSON数组
const data = XLSX.utils.sheet_to_json(worksheet);
console.log('读取的数据:', data);
