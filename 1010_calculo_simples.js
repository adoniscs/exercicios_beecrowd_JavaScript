var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var infoItem1 = lines.shift().split(" ")
var infoItem2 = lines.shift().split(" ")

var idItem1 = infoItem1.shift()
var itemQuantity1 = infoItem1.shift()
var itemValue1 = infoItem1.shift()

var IdItem2 = infoItem2.shift()
var itemQuantity2 = infoItem2.shift()
var itemValue2 = infoItem2.shift()

var totalPayable = (itemQuantity1 * itemValue1) + (itemQuantity2 * itemValue2)

console.log("VALOR A PAGAR: R$ " + totalPayable.toFixed(2))