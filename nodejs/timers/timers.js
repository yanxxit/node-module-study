let oldNum = 0;
let newNUm = 0;
setInterval(function () {
	oldNum = newNUm;
	newNUm = new Date().getTime()
	console.log(newNUm, newNUm - oldNum);
}, 1);
