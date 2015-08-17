var gulp = require('gulp'), // Сообственно Gulp JS
    concat = require('gulp-concat'), // Склейка файлов
    jade = require('gulp-jade'),
    less = require('gulp-less');
   
var path = require('path');
   

gulp.task('cssConcat', function() {
    gulp.src('./assets/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('build-less', function(){
    return gulp.src('./assets/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('jade', function() {
    gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./build/')); // Записываем собранные файлы
     
}); 

gulp.task('copy', function() {
    gulp.src('./assets/js/*.js')
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/less/*.less', ['build-less']);
    gulp.watch('./assets/template/**/*.jade', ['jade']);
    
});


gulp.task('default', ['build-less', 'jade', 'copy', 'watch']);