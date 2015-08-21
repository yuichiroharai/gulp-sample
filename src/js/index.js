/// comment
this.hoge = this.hoge || {};

(function(hoge) {
"use strict";

// Constructor
function Hoge() {
this.message = "Hellow World.";
}
var p = Hoge.prototype;

p.consoleLog = function () {
console.log(this.message);
};

hoge.Hoge = Hoge;
}(this.hoge));

var h = new this.hoge.Hoge();
h.consoleLog();
/// comment