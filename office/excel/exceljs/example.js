const ExcelJS = require('exceljs');

/**
 * 写入input.xlsx文件
 */
async function writeInputExcel() {
	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet('Sheet1');
	
	// 写入数据
	// 设置表头样式
	worksheet.columns = [
		{ header: '姓名', key: 'name', width: 20 },
		{ header: '年龄', key: 'age', width: 10 }
	];

	// 添加数据
	worksheet.addRow({ name: '张三', age: 25 });
	worksheet.addRow({ name: '李四', age: 30 });
	await workbook.xlsx.writeFile('input.test.xlsx');
}

async function modifyExcel() {
	await writeInputExcel();
	const workbook = new ExcelJS.Workbook();

	// 读取Excel文件
	await workbook.xlsx.readFile('input.test.xlsx');

	const worksheet = workbook.getWorksheet(1);

	// 修改第二行第二列的单元格
	const row = worksheet.getRow(2);
	row.getCell(2).value = 28; // 修改年龄
	row.commit();

	// 保存修改后的文件
	await workbook.xlsx.writeFile('modified.test.xlsx');
	console.log('Excel文件已修改');
}

modifyExcel();
