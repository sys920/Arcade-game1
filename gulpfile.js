const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('css', () => {
	return gulp.src('./src/**/*.css') 
		.pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
		.pipe(gulp.dest('./dist/'))
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
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('concat', function() {
  return gulp.src(['./src/js/resources.js', './src/js/app.js', './src/js/engine.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});