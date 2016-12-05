var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')


gulp.task('default', function(callback) {
  runSequence(['sass','browserSync', 'watch', 'useref', 'images', 'scripts'],
    callback
  )
});

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

//Gulp useref
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    //Minify if is a javascript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

//Gulp images optimization
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

//Gulp fonts optimization
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

//Gulp delete unnecesary files and folders
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

//Gulp watch syntax
gulp.task('watch',['browserSync', 'sass'],function(){
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('scripts', function () {
  browserify('./src/main.js')
    .transform(babel)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist'));
})


//Gulp build syntax
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})
