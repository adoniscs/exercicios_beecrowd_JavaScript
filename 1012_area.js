var input = require("fs").readFileSync("stdin", "utf8");
var [x, y, z] = input.split(" ").map(item => Number(item))

var a = x
var b = y
var c = z
var PI = 3.14159

var TRIANGLE = (a * c) / 2
var CIRCLE = PI * c ** 2
var TRAPEZIUM = ((a + b) / 2) * c
var SQUARE = b ** 2
var RECTANGLE = a * b

console.log(`TRIANGULO: ${TRIANGLE.toFixed(3)}`)
console.log(`CIRCULO: ${CIRCLE.toFixed(3)}`)
console.log(`TRAPEZIO: ${TRAPEZIUM.toFixed(3)}`)
console.log(`QUADRADO: ${SQUARE.toFixed(3)}`)
console.log(`RETANGULO: ${RECTANGLE.toFixed(3)}`)