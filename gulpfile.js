const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', () => {
	return gulp.src('./src/**/*.css') 
		.pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
		.pipe(gulp.dest('./dist/'))
});
