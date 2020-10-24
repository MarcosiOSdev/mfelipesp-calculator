

const isNumber = function(field) {
    return Number.isFinite(field)
}    


function operator(operator, num1, num2) {
    if(!isNumber(num1) || !isNumber(num2)) {
        return Error("Is not a number")
    }

    if (operator === "sum") {
        return num1 + num2
    } else if (operator === "sub") {
        return num1 - num2
    } else if (operator === "mult") {
        return num1 * num2
    } else if (operator === "div") {
        return num1 / num2
    }
}


function sum(num1, num2) {
    return operator("sum", num1, num2)
}

function sub(num1, num2) {
    return operator("sub", num1, num2)
}

function mult(num1, num2) {
    return operator("mult", num1, num2)
}

function div(num1, num2) {
    return operator("div", num1, num2)
}


module.exports = {
    sum: sum,
    sub: sub,
    mult: mult,
    div: div,
}