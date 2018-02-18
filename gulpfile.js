var gulp = require("gulp");
var babel = require("gulp-babel");
var removeFiles = require("gulp-remove-files");
var exec = require('child_process').exec;

gulp.task("clean", function(){
  exec("rm -rf build/*");
});

gulp.task("transpile", function () {
  gulp.src("src/*[!min].js")
    .pipe(babel())
    .pipe(gulp.dest("build"));

  return gulp.src("src/**/*.js")
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

gulp.task("build", ["clean", "transpile", "js-libraries", "non-js"]);

gulp.task("watch", function(){
  gulp.watch("src/**", ["build"]);
});