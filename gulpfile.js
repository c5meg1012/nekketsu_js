"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const combineMq = require('gulp-combine-mq');
const sassGlob = require("gulp-sass-glob");
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');

gulp.task('sass', function() {
  gulp.src('src/scss/style.scss')
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: 'expanded'
  })).on('error', sass.logError)
  .pipe(combineMq({
        beautify: true
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('browserify', function () {
  return browserify('./src/js/main.js')
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .on('error', function(err){
        console.log(err.message);
        console.log(err.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('script', function(){
    return gulp.src('./src/js/*.js')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(plumber.stop());
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['browserify']);
});
