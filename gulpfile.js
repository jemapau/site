var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

//Gulp watch syntax
gulp.task('watch',['browserSync', 'sass'],function(){
  gulp.watch('app/sass/**/*.sass', ['sass']);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})
