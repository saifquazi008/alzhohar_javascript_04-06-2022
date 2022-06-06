let user = {};

try {
    if (true) {
        console.log("Statement 1");
        users.name = "Jhon";
        console.log("Statement 2");
    }
} catch (error) {
    console.log("Exception is Handled .");
    console.log(error.name);
    console.log(error.message);

}
console.log("statement 3");
console.log(user);