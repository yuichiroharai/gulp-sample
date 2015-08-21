var gulp = require("gulp");
var footer = require("gulp-footer");

gulp.task("gulp-footer", null, function() {
	return gulp.src("./src/js/*.js")
		.pipe(footer("\n\n// Copyright (c) <%= year %> Yuichiroh Arai.", { year:(new Date()).getFullYear() } ))
		.pipe(gulp.dest("./dest/js"));
});