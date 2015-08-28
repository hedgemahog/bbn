var gulp = require('gulp'), // Сообственно Gulp JS
    concat = require('gulp-concat'), // Склейка файлов
    jade = require('gulp-jade'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    myth = require('gulp-myth');
   
var path = require('path');
var bower = require('gulp-bower');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./assets/img/uslugi_icons/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
                cssFormat: 'less'
            }));

    spriteData.img.pipe(gulp.dest('./build/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./assets/less/')); // путь, куда сохраняем стили
});
   

gulp.task('cssConcat', function() {
    gulp.src('./assets/css/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(myth())
        .pipe(csso())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('build-less', function(){
    return gulp.src('./assets/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('jade', function() {
    gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./build/')); // Записываем собранные файлы
     
}); 

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('./build/lib/'))
});

gulp.task('copy', function() {
    gulp.src('./assets/js/*.js')
        .pipe(gulp.dest('./build/js'));
    gulp.src('./assets/fonts/**/*.otf')
        .pipe(gulp.dest('./build/fonts')); 
    gulp.src('./assets/img/**/*')    
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('./build/img'));    
});

gulp.task('watch', function () {
    gulp.watch('./assets/less/*.less', ['build-less']);
    gulp.watch('./assets/css/**/*.css', ['cssConcat']);
    gulp.watch('./assets/template/**/*.jade', ['jade']);
    gulp.watch('./assets/img/**/*', ['copy']);
    gulp.watch('./assets/js/**/*', ['copy']);
    
});


gulp.task('default', ['build-less', 'cssConcat', 'jade', 'copy', 'bower', 'watch']);