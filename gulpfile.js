const gulp = require('gulp')
const rename = require("gulp-rename")

// just copy normalize from nodemodules to root path and change extension
const PATH = "./node_modules/normalize.css/normalize.css"

gulp.task('default', function() {
  return gulp.src(PATH)
  .pipe(rename("normalize.scss"))
  .pipe(gulp.dest('./'))
})
