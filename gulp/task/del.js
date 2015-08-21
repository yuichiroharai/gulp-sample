var gulp = require("gulp");
var del = require("del");

gulp.task("del", function(callback) {
	// 作業ディレクトリの外側は指定しない
	del("./dest/**/*", { force:false }, function (error, paths) {
		if (error) {
			console.log("error: " + error);
		} else {
			console.log("----- deleted -----\n" + paths.join("\n"));
		}
		// タスク完了を知らせる
		callback();
	});
});