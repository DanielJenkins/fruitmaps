var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

gulp.task('start', function () {
  return 
    nodemon({
      script:'app.js',
      env:{'NODE_ENV':'development'}
    })
})

gulp.task('default', ['start']);