const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watcher = require('gulp-watch');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


function styles(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/sass/**/*.scss', styles);
    gulp.watch('./*.html', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('watch', watch);

gulp.task('dev', gulp.parallel('styles', 'watch'));
