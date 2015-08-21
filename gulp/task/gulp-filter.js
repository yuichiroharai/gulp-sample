var gulp = require("gulp");
var filter = require("gulp-filter");
var uglify = require("gulp-uglify"); // JSの圧縮
var minifyCSS = require("gulp-minify-css"); // CSSの圧縮

// 後で復活させるためにフィルターを変数に格納しrestoreオプションをtrueに
var jsFilter = filter("**/*.js", {restore: true});
var cssFilter = filter("**/*.css", {restore: true});

gulp.task("gulp-filter", null, function() {
	return gulp.src(["./src/**/*.js", "./src/**/*.css"])
		// JSを残して圧縮
		.pipe(jsFilter)
		.pipe(uglify())
		// JSを復活
		.pipe(jsFilter.restore)

		// CSSだけを残して圧縮
		.pipe(cssFilter)
		.pipe(minifyCSS())
		// CSSを復活
		.pipe(cssFilter.restore)

		// JSとCSSを出力
		.pipe(gulp.dest("./dest/"));
});