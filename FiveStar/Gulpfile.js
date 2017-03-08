var gulp = require("gulp");
var sass = require("gulp-sass");
var paths = {};
paths.scss = "./Content/bootstrap/bootstrap.scss";
gulp.task('sass', function () {
    gulp.src(paths.scss)
      .pipe(sass())
      .pipe(gulp.dest("./css"));
});
gulp.task('watch-sass', function () {
    gulp.watch(paths.scss, ['sass']);
})