const gulp = require('gulp');
const html = require('gulp-minify-html');
const images = require('gulp-imagemin');
const babel = require('gulp-babel');
const css = require('gulp-minify-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

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

gulp.task('sass', () => {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./css'));
});

gulp.task('build', ['sass', 'minify-css', 'minify-js', 'minify-html', 'minify-img']);

gulp.task('default', ['build']);