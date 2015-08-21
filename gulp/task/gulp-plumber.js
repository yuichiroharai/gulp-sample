var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify"); // JSの圧縮

gulp.task("gulp-plumber", null, function() {

	// 文法エラーのあるJSファイルを読み込む
	return gulp.src("./src/txt/mistake_js.txt")
		// 何らかの処理の前に挟んでおく
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest("./dest/js/"));
});