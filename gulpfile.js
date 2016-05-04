var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var nib = require('nib');

gulp.task('dev', ['build_stylus', 'run_app', 'watch_stylus'], function(){});

gulp.task('build_stylus', ['stylus'], function(){});
gulp.task('stylus', function(){
  gulp.src('public/stylesheets/*.styl')
  .pipe(stylus({
      use: nib(),
      compress: true
    }))
  .pipe(rename('bundle.css'))
  .pipe(gulp.dest('public/css/'))
});
gulp.task('watch_stylus', function(){
  gulp.watch(['./public/stylesheets/**/*.styl'], function(evt){
    runSequence('stylus');
  });
});
gulp.task('run_app', shell.task('node index.js'));