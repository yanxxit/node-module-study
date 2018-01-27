var gulp = require('gulp');
// 引入组件
var react = require('gulp-react');
var babel = require('gulp-babel');
var less = require('gulp-less');
var sass = require('gulp-sass');

// 编译后地址
var dest = './src/min/';
var source = './src/';

//js 压缩
gulp.task('js', function() {
    return gulp.src([source + 'js/*.js'])
        //.pipe(concat('common.js'))
        //.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'));
    //.pipe($.size({title: 'minified'}));
});

gulp.task('react', function() {
    return gulp.src(['./src/js/myui.js'])
        .pipe(react())
        .pipe(babel({
            // presets: ['babel-preset-es2015']
        }))
        .pipe(gulp.dest('./src/min'));
});


gulp.task('build', ['js', 'css']);

gulp.task('default', ['build']);