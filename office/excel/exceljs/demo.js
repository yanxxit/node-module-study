const ExcelJS = require('exceljs');

async function createStyledExcel() {
	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet('Sheet1');

	// 设置表头样式
	worksheet.columns = [
		{ header: '姓名', key: 'name', width: 20 },
		{ header: '年龄', key: 'age', width: 10 }
	];

	// 添加数据
	worksheet.addRow({ name: '张三', age: 25 });
	worksheet.addRow({ name: '李四', age: 30 });

	// 合并单元格并设置样式
	worksheet.mergeCells('A3:B3');
	const cell = worksheet.getCell('A3');
	cell.value = '合并的标题';
	cell.alignment = { horizontal: 'center' };
	cell.font = { bold: true, size: 14 };

	// 保存文件
	await workbook.xlsx.writeFile('styled.xlsx');
	console.log('带样式的Excel文件已创建');
}

createStyledExcel();
