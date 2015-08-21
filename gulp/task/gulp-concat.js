var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("gulp-concat", null, function() {
	return gulp.src(["reset.css", "clearfix.css", "index.css"], { cwd:"./src/css/" })
		.pipe(concat("index.css", { newLine: "\n\n" }))
		.pipe(gulp.dest("./dest/css/"));
});