var gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("child_process-exec", function(callback) {
	// ここにコマンドを書く
	var cmd = "node ./js/index.js";

	// 作業ディレクトリを指定してコマンドを実行
	exec(cmd, { cwd:"./src/" }, function (error, stdout, stderr) {
		if (error) console.log("error: " + error);
		if (stdout) console.log("stdout: " + stdout);
		if (stderr) console.log("stderr: " + stderr);
		// タスク完了を知らせる
		callback();
	});
});