var gulp = require("gulp");
var stripJsonComments = require("gulp-strip-json-comments");

gulp.task("gulp-strip-json-comments", function() {
	return gulp.src("./src/json/*.json")
		.pipe(stripJsonComments())
		.pipe(gulp.dest("./dest/json/"));
});