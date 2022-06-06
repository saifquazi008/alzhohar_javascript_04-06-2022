let showMessage = function () {
    console.log("Today is good Day !");
}
//non param arrow function
let showMessage2 = () => {
    console.log("Today is wonderfull day !");
}

// param arrow function
let showMessage3 = (userName, age) => {
    console.log("Todays is wonderfull day !");
    console.log(userName + " " + age);
}

// parametrised arrow function
let showMessage4 = (username, execute) => {
    console.log("Today is wonderfull day!");
    console.log(username);
    execute();
}

// 

showMessage();
showMessage2();
showMessage3("jhonsmith", 20);


//callback function
showMessage4("johnsmith",showMessage3);