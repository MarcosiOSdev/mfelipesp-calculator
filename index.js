const calculator = require("mfelipesp-calculator-npm")

console.log("Init")

let a = 10
let b = 2
console.log("a: ", a , "b: ", b)

let sum = calculator.sum(a, b)
let sub = calculator.sub(a, b)
let mult = calculator.mult(a, b)
let div = calculator.div(a, b)

console.log("sum = ", sum)
console.log("sub = ", sub)
console.log("mult = ", mult)
console.log("div = ", div)
console.log("\n\n\n")
console.log("===============================")
console.log("===== Resultado do test ====== ")
console.log("===============================")
console.log("A:) -> " + calculator.sum(1, 1))
console.log("B:) -> " + calculator.sum(-123, 123123))
console.log("C:) -> " + calculator.mult(8, 0))
console.log("C:) -> " + calculator.mult(1239123, 12313))
console.log("D:) -> " + calculator.div(123, -12))
console.log("E:) -> " + calculator.div(313123, 0))