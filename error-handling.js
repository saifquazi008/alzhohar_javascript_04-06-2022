let user={};

try {
    if (true) {
        console.log("Statement 1");
        user.name="Saif";
        console.log("Satement 2");
        
    }
} catch (error) {
    console.log("Exception is Handled .");
    console.log(error.name);
    console.log(error.message);
}
console.log("Statement 3");
console.log(user);