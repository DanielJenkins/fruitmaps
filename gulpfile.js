var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var nodemon = require('gulp-nodemon');
//var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('build/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('application/public/css'));
})

gulp.task('jade', function() {
  console.log('Running Jade');
  gulp.src('./build/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./application/public/html'));
});

gulp.task('start', function () {
  return nodemon({
    script:'application/app.js',
    env:{'NODE_ENV':'development'}
  })
})
// var app = 'application/app.js';
// gulp.task('nodemon', function() {
//   nodemon({
//     script: app,
//   }).on('start');
// });

gulp.task('watch', function () {
  gulp.watch('./build/jade/**/*.jade', ['jade']);
  gulp.watch('build/scss/**/*.scss', ['sass']);
})

gulp.task('default', ['start', 'sass', 'jade', 'watch']);