//Require Gulp
var gulp = require('gulp');

//Define Plugins
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var notify = require('gulp-notify');

gulp.task('scss', function() {
  gulp.src('assets/_scss/*.scss')
    .pipe(sass({sourcemap: false, style: 'compressed'}))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('assets/css/'))
    .pipe(notify({message: "You just got super Sassy!"}));
});

gulp.task('templates', function(){
  gulp.src(['assets/_templates/*.hbs'])
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  // watch scss files
  gulp.watch('assets/_scss/*.scss', function() {
    gulp.run('scss');
  });
});

gulp.task('default', ['scss', 'watch']);
