var gulp = require("gulp");
var runSequence = require("run-sequence");

var requireDir = require("require-dir");
requireDir("./gulp/task", { recurse: true });

gulp.task("default", ["gulp-plumber"]);
//gulp.task("default", ["gulp-notify"]);
//gulp.task("default", ["run-sequence"]);
//gulp.task("default", ["gulp-rename"]);
//gulp.task("default", ["gulp-if-true"]);
//gulp.task("default", ["gulp-if-false"]);
//gulp.task("default", ["gulp-ignore"]);
//gulp.task("default", ["gulp-filter"]);
//gulp.task("default", ["child_process-exec"]);
//gulp.task("default", ["fs"]);
//gulp.task("default", ["strip-json-comments"]);
//gulp.task("default", ["gulp-strip-json-comments"]);
//gulp.task("default", ["gulp-replace"]);
//gulp.task("default", ["gulp-header"]);
//gulp.task("default", ["gulp-footer"]);
//gulp.task("default", ["gulp-concat"]);
//gulp.task("default", ["event-stream"]);
//gulp.task("default", ["del"]);

/*gulp.task("default", null, function(callback) {
	runSequence(
		"gulp-plumber",
		"gulp-notify",
		"run-sequence",
		"gulp-rename",
		"gulp-if-true",
		"gulp-if-false",
		"gulp-ignore",
		"gulp-filter",
		"child_process-exec",
		"fs",
		"strip-json-comments",
		"gulp-strip-json-comments",
		"gulp-replace",
		"gulp-header",
		"gulp-footer",
		"gulp-concat",
		"event-stream",
		"del",
		// タスク完了を知らせる
		callback
	);
});*/
