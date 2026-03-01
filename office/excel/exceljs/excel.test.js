// generateYesNoExcel.js
const ExcelJS = require('exceljs');
const path = require('path');

async function generateYesNoExcel() {
	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet('Sheet1');

	// 设置表头
	worksheet.columns = [
		{ header: '是否同意', key: 'agree', width: 15 },
		{ header: '姓名', key: 'name', width: 20 },
		{ header: '国籍', key: 'nationality', width: 20 },
		{ header: '手机号', key: 'phone', width: 25 },
		{ header: '性别', key: 'gender', width: 15 }
	];

	// 添加几行示例数据（可选）
	worksheet.addRow({ agree: '是', name: '张三', nationality: '中国', phone: '13800138000', gender: '男' });
	worksheet.addRow({ agree: '否', name: '李四', nationality: '美国', phone: '13900139000', gender: '女' });

	// 🔑 关键：为 A 列（agree 列）添加数据验证（下拉列表）
	const startRow = 2; // 从第2行开始（跳过表头）
	const endRow = 1000; // 假设最多1000行

	// 为性别列添加备注，讲解性别选择规则
	worksheet.getCell('E1').note = '性别选择规则：\n1. 当国籍为美国时，可以选择"男"、"女"或"其他"\n2. 当国籍不为美国时，只能选择"男"或"女"\n3. 选择"其他"时会提示校验失败';

	for (let row = startRow; row <= endRow; row++) {
		// 为是否同意列添加数据验证
		worksheet.getCell(`A${row}`).dataValidation = {
			type: 'list',
			allowBlank: true,
			formulae: ['"是,否"'], // 注意：字符串用双引号包裹，内部用英文逗号分隔
			showErrorMessage: true,
			errorTitle: '输入错误',
			error: '请选择"是"或"否"'
		};

		// 为国籍列添加数据验证
		worksheet.getCell(`C${row}`).dataValidation = {
			type: 'list',
			allowBlank: true,
			formulae: ['"中国,美国,日本,韩国,英国,法国,德国,加拿大,澳大利亚,俄罗斯"'], // 10个热门国籍
			showErrorMessage: true,
			errorTitle: '输入错误',
			error: '请从下拉列表中选择国籍'
		};

		// 为手机号列添加数据验证（正则表达式校验）
		worksheet.getCell(`D${row}`).dataValidation = {
			type: 'custom',
			allowBlank: true,
			formulae: [`=AND(ISNUMBER(D${row}), LEN(D${row})=11, LEFT(D${row},1)=1)`], // 校验11位数字且以1开头
			showErrorMessage: true,
			errorTitle: '输入错误',
			error: '请输入有效的手机号（11位数字，以1开头）'
		};

		// 为性别列添加自定义验证，确保当选择"其他"时提示校验失败
		worksheet.getCell(`E${row}`).dataValidation = {
			type: 'custom',
			allowBlank: true,
			formulae: [`=OR(E${row}="男", E${row}="女")`], // 只允许选择"男"或"女"
			showErrorMessage: true,
			errorTitle: '输入错误',
			error: '选择"其他"时校验失败'
		};
	}

	// 保存文件
	const filePath = path.resolve(__dirname, 'address.xlsx');
	await workbook.xlsx.writeFile(filePath);
	console.log(`✅ Excel 文件已生成: ${filePath}`);
}

generateYesNoExcel().catch(console.error);
