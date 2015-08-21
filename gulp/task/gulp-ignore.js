var gulp = require("gulp");
var ignore = require("gulp-ignore");
var minifyCSS = require("gulp-minify-css"); // CSSの圧縮

gulp.task("gulp-ignore", null, function() {
	return gulp.src("./src/**/*.*")
		// excludeは関数がtrueを返したら除外
		.pipe(ignore.exclude(function(file){
			// 拡張子が.cssじゃなかったらtrueを返して除外
			return file.path.search(/.css$/) == -1;
		}))
		// .cssファイルだけを圧縮
		.pipe(minifyCSS())
		.pipe(gulp.dest("./dest/"));
});