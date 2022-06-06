// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred

let number = 100.112345;
console.log("statement 1");

try {
    number.toPrecision(4);
    console.log(number.toPrecision(500));   // toPrecision() argument must be between 1 and 100

} catch (error) {
    console.log("Error :", error.name);
    console.log("Message :", error.message);

}
console.log("Statement 2");
console.log("-----------------------");
console.log("Statement 3");

try {
    number.toUpperCase();
} catch (error) {
    console.log("Error : ", error.name);
    console.log("Message : ", error.message);
}
console.log("Statement 4");


console.log("-----------------------");

console.log("Statement 5");

try {
    eval("'hi");
} catch (ex) {
    console.log("Error : ", ex.name);
    console.log("Message : ", ex.message);
}
console.log("Statement 6");