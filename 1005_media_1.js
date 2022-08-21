var input = require("fs").readFileSync("stdin", "utf8");

// var [x, y] = input.split(" ").map(item => parseInt(item))

var lines = input.split("\n")

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())

var MEDIA = (((A * 3.5) + (B * 7.5)) / 11).toFixed(5)

console.log('MEDIA = ' + MEDIA)