
$("#icon-reputation").find("#cert-lines").find("path");
/* -------------------------------------------------- */
/* SELECTOR BENCHMARKS
/* -------------------------------------------------- */

var $testElement = $("#icon-reputation"),
	$$testElement = $$("#icon-reputation");


console.log("////////////////////////////////////////");

// ($) find()
console.time("benchmark ($) find()");
for (var i = 0; i < 1000; i++) {
  var elem = $("#icon-reputation").find("#cert-lines").find("path");
}
console.timeEnd("benchmark ($) find()");


// ($) children()
console.time("benchmark ($) children()");
for (var i = 0; i < 1000; i++) {
  var elem = $("#icon-reputation").children("#cert-lines").children();
}
console.timeEnd("benchmark ($) children()");
console.log("////////////////////////////////////////");





// ($$) find()
console.time("benchmark ($$) find()");
for (var i = 0; i < 1000; i++) {
  var elem = $$("#icon-reputation").find("#cert-lines").find("path");
}
console.timeEnd("benchmark ($$) find()");


// ($$) children()
console.time("benchmark ($$) children()");
for (var i = 0; i < 1000; i++) {
  var elem = $$("#icon-reputation").children("#cert-lines").children();
}
console.timeEnd("benchmark ($$) children()");
console.log("////////////////////////////////////////");





// ($) cache find()
console.time("benchmark ($) cache find()");
for (var i = 0; i < 1000; i++) {
  var elem = $testElement.find("#cert-lines").find("path");
}
console.timeEnd("benchmark ($) cache find()");


// ($) cache children()
console.time("benchmark ($) cache children()");
for (var i = 0; i < 1000; i++) {
  var elem = $testElement.children("#cert-lines").children();
}
console.timeEnd("benchmark ($) cache children()");
console.log("////////////////////////////////////////");





// ($$) cache find()
console.time("benchmark ($$) cache find()");
for (var i = 0; i < 1000; i++) {
  var elem = $$testElement.find("#cert-lines").find("path");
}
console.timeEnd("benchmark ($$) cache find()");


// ($$) cache children()
console.time("benchmark ($$) cache children()");
for (var i = 0; i < 1000; i++) {
  var elem = $$testElement.children("#cert-lines").children();
}
console.timeEnd("benchmark ($$) cache children()");
console.log("////////////////////////////////////////");
