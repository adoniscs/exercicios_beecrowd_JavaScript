var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var sallerName = lines.shift()
var salary = Number(lines.shift())
var salesAmount = Number(lines.shift())
var bonus = (salesAmount * 15) / 100
var finalSalary = salary + bonus

console.log("TOTAL = R$ " + finalSalary.toFixed(2))