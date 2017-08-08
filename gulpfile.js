const gulp = require('gulp');
const babel = require('gulp-babel');
const connect = require('gulp-connect');
const css = require('gulp-minify-css');
const html = require('gulp-minify-html');
const images = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// define tasks to minify & bundle for deployment
gulp.task('minify-js', () => {
  gulp.src('./index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', () => {
  gulp.src('./index.html')
    .pipe(html())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-img', () => {
  gulp.src('./images/*')
    .pipe(images())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('minify-css', () => {
  gulp.src('./css/*')
    .pipe(css())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./public/css'));
});

// # define tasks for serving and reloading content while developing
gulp.task('connect', () => {
  connect.server({
    root: '.',
    livereload: true
  });
});

// ## load html
gulp.task('livereload-html', () => {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

// ## load CSS
gulp.task('livereload-css', () => {
  gulp.src('./css/main.css')
    .pipe(connect.reload());
});

// ## load JS
gulp.task('livereload-js', () => {
  gulp.src('./index.js')
    .pipe(connect.reload());
});

gulp.task('sass', () => {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  gulp.watch(['./index.html'], ['livereload-html']);
  gulp.watch(['./css/main.css'], ['livereload-css']);
  gulp.watch(['./index.js'], ['livereload-js']);
  gulp.watch(['./scss/*.scss'], ['sass']);
});

gulp.task('build', ['sass', 'minify-css', 'minify-js', 'minify-html', 'minify-img']);

gulp.task('default', ['sass', 'connect', 'watch']);
