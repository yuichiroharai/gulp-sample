var gulp = require("gulp");
var header = require("gulp-header");

gulp.task("gulp-header", null, function() {
	return gulp.src("./src/js/*.js")
		.pipe(header("// Copyright (c) <%= year %> Yuichiroh Arai.\n\n", { year:(new Date()).getFullYear() } ))
		.pipe(gulp.dest("./dest/js"));
});