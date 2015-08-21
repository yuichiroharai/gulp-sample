var gulp = require("gulp");
var runSequence= require("run-sequence");

gulp.task("run-sequence", null, function(callback) {
	runSequence(
		"first",
		["second-1", "second-2", "second-3"],
		"third",
		// タスク完了を知らせる
		callback
	);
});

gulp.task("first", null, function(callback) {
	setTimeout(function(){
		callback();
	}, 3000);
});
gulp.task("second-1", null, function(callback) {
	setTimeout(function(){
		callback();
	}, 1500);
});
gulp.task("second-2", null, function(callback) {
	setTimeout(function(){
		callback();
	}, 3000);
});
gulp.task("second-3", null, function(callback) {
	setTimeout(function(){
		callback();
	}, 5000);
});
gulp.task("third", null, function(callback) {
	setTimeout(function(){
		callback();
	}, 2000);
});