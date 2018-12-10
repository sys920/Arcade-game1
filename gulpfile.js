const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();


gulp.task('css', () => {
	return gulp.src('./src/**/*.css') 
		.pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
});

gulp.task('images', () => {
  return gulp.src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
});

gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')
  .pipe(babel({
      presets: ['@babel/env']
  }))  
  .pipe(gulp.dest('./src/js'))
  .pipe(browserSync.stream())
});

gulp.task('concat', function() {
  return gulp.src(['./src/js/resources.js', './src/js/app.js', './src/js/engine.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
});

gulp.task('copy-html', () => {
  return gulp.src('./index.html')
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream())
});

gulp.task('default', ['copy-html','css', 'images', 'js','concat'], () => {
  gulp.watch('./index.html', ['copy-html']);
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/js/**/*.js', ['js','concat']);

  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  });
});
