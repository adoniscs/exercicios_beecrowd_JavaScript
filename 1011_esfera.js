var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var PI = 3.14159
var R = lines.shift()
var volume = (4.0 / 3) * PI * R ** 3

console.log('VOLUME = ' + volume.toFixed(3))
