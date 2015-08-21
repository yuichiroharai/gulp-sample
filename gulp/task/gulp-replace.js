var gulp = require("gulp");
var replace = require("gulp-replace");

gulp.task("gulp-replace", null, function() {
	return gulp.src("./src/js/*.js")
		/* /// で始まるコメント行だけを削除 */
		.pipe(replace(/^\/\/\/[^\n]*$\n?/gm, ""))
		.pipe(gulp.dest("./dest/js"));
});