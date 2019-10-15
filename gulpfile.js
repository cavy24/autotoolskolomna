let gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  uglifyJs = require('gulp-uglifyjs'),
  rename = require('gulp-rename'),
  htmlMin = require('gulp-htmlmin'),
  delFiles = require('del'),
  BS = require('browser-sync'),
  cssMinify = require('gulp-csso'),
  babel = require('gulp-babel'),
  //concat = require('gulp-concat'),
  imageMin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  removeHtmlComments = require('gulp-remove-html-comments'),
  rigger = require('gulp-rigger'),
  sourcemaps = require('gulp-sourcemaps');
 
  gulp.task('default', ['delFiles', 'html', 'sass', 'js', 'imageMin', 'svg', 'fonts', 'php', 'watchFiles', 'server'], function () {
    console.log('Project is ready!');
  });
  
  gulp.task('delFiles', function () {
    delFiles.sync('./dist/*');
  });
  
  gulp.task('html', function () {
    gulp.src(['./app/index.html', './app/thank_form.html', './app/thank_newsletter.html']) //все файлы html
      .pipe(rigger())
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
      .pipe(sourcemaps.init())
      .pipe(sass()) // конвертируем sass в css
      //.pipe(concat('main.css')) //склеиваем файлы main.css
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css')) //размещаем в дир-рии dist
      .pipe(sourcemaps.init())
      .pipe(cssMinify()) //сжимаем файл main.css
      .pipe(rename({
        suffix: '.min' // добавляем к названию суффикс, переписываем src в index.html = "css/main.min.css"
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css')); //размещаем в дир-рии dist файл main.min.css
  
    BS.reload({ //перезагрузка страницы в случае внесения изменений в файлы .css
      stream: false
    });
  });
  
  gulp.task('js', function () {
    gulp.src(['./app/js/main.js'])
      .pipe(rigger())
      .pipe(babel({
        "presets": ["env"]
      })) //Для ES6
      .pipe(gulp.dest('./dist/js'))
      .pipe(sourcemaps.init())
      .pipe(uglifyJs())
      .pipe(rename({
      suffix: '.min' //переписываем src в index.html = "js/main.min.js"
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/js'));
  
    BS.reload({
      stream: false
    });
  });
  
  gulp.task('imageMin', function () {
    gulp.src('./app/img/*')
      .pipe(imageMin({ //Сожмем их
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
      }))
      .pipe(gulp.dest('./dist/img'))
  });

  gulp.task('svg', function () {
    gulp.src('./app/svg/*')
      .pipe(gulp.dest('dist/svg'))
  });

  gulp.task('fonts', function () {
    gulp.src('./app/fonts/*')
     .pipe(gulp.dest('./dist/fonts'))
  });

  gulp.task('php', function () {
    gulp.src('./app/**/*.php')
     .pipe(gulp.dest('./dist'))
  });
  
  gulp.task('watchFiles', function () {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/sass/main.sass'], ['sass']);
    gulp.watch(['./app/js/main.js'], ['js']);
    gulp.watch('./app/img/*', ['imageMin']);
    gulp.watch('./app/svg/*', ['svg']);
  });
  
  gulp.task('server', function () {
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
  });
  
  
  gulp.task('slick', function () {
    gulp.src('./app/slick/*') // все файлы
      .pipe(gulp.dest('./dist/slick')); //размещаем в дир-рии dest/
  
    BS.reload({
      stream: false
    });
  });

  */
  