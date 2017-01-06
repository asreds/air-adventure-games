var concat = require('gulp-concat');
var gulp = require('gulp');
gulp.task('build', function() {
  return gulp.src('./script/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'));
});