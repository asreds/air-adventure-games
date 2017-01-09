var concat = require('gulp-concat');
var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');


gulp.task('build', function() {
  return watch('./script/*.js', function () {
    gulp.src('./script/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'));
   });
});

gulp.task('compress', function() {
  gulp.src('./script/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});