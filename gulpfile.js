let gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglifyJs = require('gulp-uglifyjs'),
  rename = require('gulp-rename'),
  htmlMin = require('gulp-htmlmin'),
  delFiles = require('del'),
  BS = require('browser-sync'),
  cssMinify = require('gulp-csso'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  imageMin = require('gulp-imagemin'),
  removeHtmlComments = require('gulp-remove-html-comments');
 
  gulp.task('default', ['delFiles', 'html', 'sass', 'js', 'imageMin', 'svg', 'fonts', 'slick', 'watchFiles', 'myServer'], function () {
    console.log('Project is ready!');
  });
  
  gulp.task('delFiles', function () {
    delFiles.sync('./dist/*');
  });
  
  gulp.task('html', function () {
    gulp.src('./app/**/*.html') //все файлы html
      .pipe(concat('index.html')) //склеиваем файлы в index.html
      .pipe(htmlMin({ //сжимаем
        collapseWhitespace: true //удаляем пробелы
      }))
      .pipe(removeHtmlComments()) //удаляем комм-ты
      .pipe(gulp.dest('./dist')); //размещаем в дир-рии dist
  
    BS.reload({ //перезагрузка страницы в случае внесения изменений в файл index.html
      stream: false
    });
  });
  
  gulp.task('sass', function () {
      gulp.src(['./app/sass/main.sass'])
      .pipe(sass()) // конвертируем sass в css
      //.pipe(concat('main.css')) //склеиваем файлы main.css
      .pipe(gulp.dest('./dist/css')) //размещаем в дир-рии dist
      .pipe(cssMinify()) //сжимаем файл main.css
      .pipe(rename({
        suffix: '.min' // добавляем к названию суффикс, переписываем src в index.html = "css/main.min.css"
      }))
      .pipe(gulp.dest('./dist/css')); //размещаем в дир-рии dist файл main.min.css
  
    BS.reload({ //перезагрузка страницы в случае внесения изменений в файлы .css
      stream: false
    });
  });
  
  gulp.task('js', function () {
    gulp.src('./app/pages/**/*.js')
      .pipe(babel({
        "presets": ["env"]
      })) //Для ES6
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(uglifyJs())
      .pipe(rename({
        suffix: '.min' //переписываем src в index.html = "js/main.min.js"
      }))
      .pipe(gulp.dest('./dist/js'));
  
    BS.reload({
      stream: false
    });
  });
  
  gulp.task('imageMin', function () {
    gulp.src('./app/img/*')
      .pipe(imageMin())
      .pipe(gulp.dest('dist/img'))
  });

  gulp.task('svg', function () {
    gulp.src('./app/svg/*')
      .pipe(gulp.dest('dist/svg'))
  });

  gulp.task('fonts', function () {
    gulp.src('./app/fonts/*')
     .pipe(gulp.dest('dist/fonts'))
  });

  gulp.task('slick', function () {
    gulp.src('./app/slick/*') // все файлы
      .pipe(gulp.dest('./dist/slick')); //размещаем в дир-рии dest/
  
    BS.reload({
      stream: false
    });
  });
  
  gulp.task('watchFiles', function () {
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch(['./app/sass/main.sass'], ['sass']);
    gulp.watch('./app/pages/**/*.js', ['js']);
    gulp.watch('./app/img/*', ['imageMin']);
    gulp.watch('./app/svg/*', ['svg']);
  });
  
  gulp.task('myServer', function () {
    BS({
      server: {
        baseDir: './dist'
      }
    });
  });
    
  /*gulp.task('json', function () {
    gulp.src(['./app/json/basket_get.json']) *///один файл
      /* .pipe(jeditor({
         'version': '2.4.1'
       }))*/
     /* .pipe(gulp.dest('./dist/json')); //размещаем в дир-рии dist
  
    BS.reload({ //перезагрузка страницы в случае внесения изменений в файл basket_get.json
      stream: false
    });
  });*/
  