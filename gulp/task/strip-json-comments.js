var gulp = require("gulp");
var fs = require("fs");
var stripJsonComments = require("strip-json-comments");

// JSONファイルを読み込んで、コメントを除去してからオブジェクトにパース
var obj = JSON.parse(stripJsonComments(fs.readFileSync("./src/json/config_comment.json", { encoding:"utf8" })));

gulp.task("strip-json-comments", function(callback) {
	// オブジェクトを整形して出力
	console.log(JSON.stringify(obj, null , "\t"));
	callback();
});