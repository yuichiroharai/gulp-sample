var gulp = require("gulp");
var gulpIf = require("gulp-if");
var uglify = require('gulp-uglify'); // JSの圧縮
var beautify = require('gulp-beautify'); // JSの整形

function transformJS(src, dest, isMinify) {
	return gulp.src(src)
		.pipe(gulpIf(isMinify,
			// trueの場合は圧縮する
			uglify(),
			// falseの場合は整形だけする
			beautify()
		))
		.pipe(gulp.dest(dest));
}

gulp.task("gulp-if-true", null, function() {
	return transformJS("./src/js/index.js", "./dest/js/", true);
});
gulp.task("gulp-if-false", null, function() {
	return transformJS("./src/js/index.js", "./dest/js/", false);
});