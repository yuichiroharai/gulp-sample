var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs"); // EJSをHTMLにレンダリング

gulp.task("gulp-rename", null, function() {
	// 文字列指定
	gulp.src("./src/ejs/index.ejs")
		.pipe(ejs({text: "Hellow World."}))
		.pipe(rename("index.html"))
		.pipe(gulp.dest("./dest/01/")); // ./dest/01/index.html

	// オブジェクト指定
	gulp.src("./src/ejs/*.ejs")
		.pipe(ejs({text: "Hellow World."}))
		.pipe(rename({
			dirname: "02",
			prefix: "pre-",
			suffix: "-suf",
			extname: ".html"
		}))
		.pipe(gulp.dest("./dest/")); // ./dest/02/pre-*-suf.html

	// 関数指定
	gulp.src("./src/ejs/*.ejs")
		.pipe(ejs({text: "Hellow World."}))
		.pipe(rename(function(path){
			path.dirname = "03";
			path.basename = "pre-" + path.basename + "-suf";
			path.extname = '.html';
		}))
		.pipe(gulp.dest("./dest/")); // ./dest/03/pre-*-suf.html
});