var gulp = require("gulp");
var fs = require("fs");

// JSONファイルを読み込んで、オブジェクトにパース
var obj = JSON.parse(fs.readFileSync("./src/json/config.json", { encoding:"utf8" }));

gulp.task("fs", function(callback) {
	// オブジェクトを整形して出力
	console.log(JSON.stringify(obj, null , "\t"));
	callback();
});