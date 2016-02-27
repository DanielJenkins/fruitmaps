var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('build/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('application/public/css'))
})

gulp.task('start', function () {
  return nodemon({
    script:'application/app.js',
    env:{'NODE_ENV':'development'}
  })
})

gulp.task('watch', function () {
  return 
    gulp.watch('build/scss/**/*.scss')
})

gulp.task('default', ['start', 'sass', 'watch']);