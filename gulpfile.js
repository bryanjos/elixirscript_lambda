"use strict";

const gulp = require('gulp');
const exec = require('child_process').exec;
const babel = require('gulp-babel');
const del = require('del');
const zip = require('gulp-zip');

const exjsSrc = 'app/elixirscript';
const exjsDest = 'app/tmp';

gulp.task('build-exjs', (cb) => exec('elixirscript "' + exjsSrc + '" -o ' + exjsDest, (err, stdout, stderr) => cb(err)));

gulp.task('build', ['build-exjs'], () => {
    return gulp.src('app/tmp/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return del([
    'lambda.zip'
  ]);
});

gulp.task('package', ['clean', 'build'], () => {
    return gulp.src('./**/*.js*')
        .pipe(zip('lambda.zip'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['package']);
