const { Signale } = require('signale');

const options = {
	types: {
		remind: {
			badge: '**',
			color: 'yellow',
			label: '提醒'
		}
	}
};

const custom = new Signale(options);
custom.remind('需要改进文档');


const logger = new Signale({
	secrets: ['password123', 'token456']
});

logger.log('密码是：password123');
// 输出：密码是：[secure]


const interactive = new Signale({
	interactive: true,
	scope: '交互式'
});

let count = 1;
interactive.await('[%d/10] - 进程A', count);
setInterval(function () {
	interactive.await('[%d/10] - 进程B', count);
	count++;
	if (count > 10) {
		interactive.complete('进程完成');
	}
}, 100);

