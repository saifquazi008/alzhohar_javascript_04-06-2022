// nested function are closures
// Access three diff scopr :-
// global varaibles
// outer function varaible and paramenters
// inner function varaible and paramenters

let firstName = "jhon";

function fullName(x) {
    let middleName = "William"; // local variable or outer function vairable
    //nested function or closures

    function combine() {
        let lastName = "Smith"; //local variable or inner function variable
        return `${firstName} ${middleName} ${lastName}`;
    }
    return combine();
}

console.log(fullName());