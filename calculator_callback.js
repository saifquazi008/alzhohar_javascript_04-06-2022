let calculator = function (num1, num2, callback) {
    return callback(num1, num2);
}

let add = function (num1, num2) {
    return num1 + num2;
}

let sub = function (num1, num2) {
    return num1 - num2;
}
let mul = function (num1, num2) {
    return num1 * num2;
}
let div = function (num1, num2) {
    return num1 / num2;
}

let x = 1000;
let y = 500;

console.log(`The addition of ${x} + ${y} = ${calculator(x, y, add)}`);
console.log(`The substraction of ${x} - ${y} = ${calculator(x, y, sub)}`);
console.log(`The multiplication of ${x} * ${y} = ${calculator(x, y, mul)}`);
console.log(`The division of ${x} / ${y} = ${calculator(x, y, div)}`);