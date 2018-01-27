var demo = {};

demo.print = function() {
	console.log('打印数据。。。。');
}

function demoAlert() {
	console.log('调用功能');
}

demo.print();

function globalCallbackName(e){
    if(e.keyCode==32){
        //play();//触发自定义的页面效果
        e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
    }
}