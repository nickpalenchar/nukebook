var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("transpile", function () {
  return gulp.src("src/*[!min].js")
    .pipe(babel())
    .pipe(gulp.dest("build"));
});

gulp.task("js-libraries", function(){
  return gulp.src("src/*.min.js")
    .pipe(gulp.dest("build"))
});

gulp.task("non-js", function(){
  return gulp.src("src/*[!js]")
    .pipe(gulp.dest("build"));
});

gulp.task("build", ["transpile", "js-libraries", "non-js"]);

gulp.task("watch", function(){
  gulp.watch("src/*.js", ["build"]);
});