var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
  return gulp.src('styles/**/style.css')
      .pipe(concatCss("styles/bundle.css"))
      .pipe(cleanCSS({compability: 'ie8'}))
      .pipe(gulp.dest('out/'));
});


