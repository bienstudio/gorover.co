const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const jsc_src = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/smooth-scroll/dist/js/smooth-scroll.js',
  './assets/jsc/application.js'
]

gulp.task('jsc', () => {
  gulp.src(jsc_src)
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/jsc/'))
})

gulp.task('watch', () => {
  gulp.watch(jsc_src, ['jsc'])
})
