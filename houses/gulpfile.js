'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const minify = require('gulp-csso');
const multipipe = require('multipipe');
const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const combine = require('stream-combiner2').obj;
const imagemin = require('gulp-imagemin');
const ghPages = require('gulp-gh-pages');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";  // set NODE_ENV=production&&gulp build   (В консоль на продакшн(Сборка без sourcemaps))

gulp.task('styles', function() {

  return multipipe(
    gulp.src('src/sass/style.scss'),
    gulpIf(isDevelopment, sourcemaps.init()),
    sass(),
    postcss([
      autoprefixer({browsers: [
        'last 1 version',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Opera versions',
        'last 2 Edge versions'
      ]}),
      mqpacker({
        sort: true
      })
    ]),
    gulpIf(isDevelopment, sourcemaps.write()),
    gulp.dest('build/css'),
    minify(),
    rename('style-min.css'),
    debug({title: 'min-css'}),
    gulp.dest('build/css')
  ).on('error', notify.onError(function(err) {
    return {
      title: 'Styles',
      message: err.message
    };
  }));

});

gulp.task('min-js', function() {
  return multipipe(
    gulp.src('src/assets/js/*.js'),
      gulp.dest('build/js')
      // uglify(),
      // rename('main-js-min.js'),
      // debug({title: 'min-js'}),
      // gulp.dest('build/js')
  );
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('images', function() {
  return gulp.src('build/img/**/*.{jpg, png, gif}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest('build/img'));
});

gulp.task('assets', function() {
  return multipipe(
    gulp.src('src/assets/**', {since: gulp.lastRun('assets')}),
      newer('build'),
      debug({title: 'assets'}),
      gulp.dest('build')
  ).on('error', notify.onError(function(err) {
    return {
      title: 'Assets',
      message: err.message
    };
  }));
});

gulp.task('html', function() {
  return multipipe(
    gulp.src('src/*.html', {since: gulp.lastRun('html')}),
    debug({title: 'html'}),
    gulp.dest('build')
  ).on('error', notify.onError(function(err) {
      return {
        title: 'html',
        message: err.message
      };
    }));
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('html', 'styles', 'assets', 'min-js'),
  'images')
);

gulp.task('watch', function() {
  gulp.watch('src/*.html', gulp.series('html'));

  gulp.watch('src/sass/**/*.*', gulp.series('styles'));

  gulp.watch('src/assets/**/*.*', gulp.series('assets'));
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'build'
  });

  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
  gulp.series('build',  gulp.parallel('watch', 'serve'))
);
