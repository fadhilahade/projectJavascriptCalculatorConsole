let digitA = prompt('Input the first number')
let digitB = prompt('input the second number')
let operator = prompt('input operator (+,-,*,/,%')
let res = null

let digitC = parseInt(digitA)
let digitD = parseInt(digitB)

switch (operator) {
    case '+':
        res = digitC + digitD
        console.log(res)
        break;

    case '-':
        res = digitC - digitD
        console.log(res)
        break;

    case '*':
        res = digitC * digitD
        console.log(res)
        break;

    case '/':
        res = digitC / digitD
        console.log(res)
        break;

    case '%':
        res = digitC % digitD
        console.log(res)
        break;

    default:
        console.log('error')
        break;
}