var gulp = require('gulp');
var sass = require('gulp-sass');
var data = require('gulp-data');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var yaml = require('gulp-yaml');
var cleanCSS = require('gulp-clean-css');


gulp.task('default', ['sass', 'pug', 'data'], function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/yaml/**/*.yml', ['data']);
  gulp.watch('src/pug/**/*.pug', ['pug']);
});

gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 15 version'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});


gulp.task('data', function() {
  gulp.src('src/yaml/*.yml')
  .pipe(yaml({ safe: true, space: 2 }))
  .pipe(gulp.dest('./dist/data/'))
  .pipe(browserSync.stream());
});


gulp.task('pug', function buildHTML() {

  // de-caching for data files
  function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
  }

  return gulp.src('src/pug/*.pug')
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(data(function(file) {
    return requireUncached('./dist/data/data.json');
  }))
  .pipe(pug({
    'pretty': false
  }))
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.stream());
});
