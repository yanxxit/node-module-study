var gulp = require('gulp');  
var imageisux = require('gulp-imageisux');  
//task指定任务，第一个参数为任务名，default为默认，调用gulp会自动执行  
gulp.task('default',function(){  
    return gulp.src(['./img/*'])  
               .pipe(imageisux('',true));  
})  