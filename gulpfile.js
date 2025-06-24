const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');

const scssSrc = 'src/styles/main.scss';
const cssDest = 'src/app/assets';

// Compile SCSS to CSS
function scss() {
  return gulp
    .src(scssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
}

gulp.task('scss', scss);

gulp.task('scss:watch', function () {
  gulp.watch('src/styles/**/*.scss', gulp.series('scss'));
}); 