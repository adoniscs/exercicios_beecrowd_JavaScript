var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var IdEmployee = lines.shift()
var workedHours = lines.shift()
var hourlyWage = lines.shift()
var salary = workedHours * hourlyWage

console.log("NUMBER = " + IdEmployee)
console.log("SALARY = U$ " + salary.toFixed(2))