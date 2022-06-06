function validationError(message) {
    this.name = this.name;
    this.message = message;
}

function ageValidation(age) {
    try {
        if (age < 18) {
            throw new validationError(`${age} , Is not valid age `)


        } else {
            console.log("Wellcome to vote ,you age is valid ,", age);
        }
    } catch (error) {
        console.log("Exception is Handled .");
        console.log(error.name);
        console.log(error.message);

    }
}
ageValidation(20);
console.log("--------------");
ageValidation(10);