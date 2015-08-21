var gulp = require("gulp");
var eventStream= require("event-stream");

gulp.task("event-stream", null, function() {
	return eventStream.merge(
		gulp.src("src/js/*.js")
			.pipe(gulp.dest("dest/js/")),

		gulp.src("src/css/*.css")
			.pipe(gulp.dest("dest/css/"))
	);
});