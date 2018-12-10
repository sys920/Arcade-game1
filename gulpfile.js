const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
	return gulp.src('./src/**/*.css') 
		.pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
		.pipe(gulp.dest('./dist/'))
});
