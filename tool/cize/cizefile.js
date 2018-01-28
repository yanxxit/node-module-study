const demo = cize.project('demo', {});


//定义一个 Job，这是一个最基础的 Job
demo.job('hello', function(self) {
    self.console.log('hello world');
    self.done();
});
demo.job('hi', function(self) {
    self.console.log('hi');
    self.done();
});