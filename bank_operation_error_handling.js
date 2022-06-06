let accounts = [
    { id: 101, username: "saif", password: "saif12", email: "saif@gmail.com", balance: 90000 },
    { id: 102, username: "Asfar", password: "Asfar12", email: "Asfar@gmail.com", balance: 2000 },
    { id: 103, username: "Haris", password: "Haris12", email: "Haris@gmail.com", balance: 6000 },
    { id: 104, username: "Tony", password: "Tony12", email: "Tony@gmail.com", balance: 3000 },
    { id: 105, username: "Shahid", password: "Shahid12", email: "Shahid@gmail.com", balance: 9000 },
];

function findAccount(id) {
    let match = false;
    try {
        for (const acc of accounts) {
            if (acc.id == id) {
                console.log(`The user '${acc.username}' balance is :'${acc.balance}'`);
                match = true;
                return acc;
            }
        }
        if (!match) {
            throw new SyntaxError(`Account ${id} not found`);

        }
    } catch (error) {

        console.log("Error : ", error.name);
        console.log("Message : ", error.message);
    }
}
findAccount(101);
console.log("---------------");
findAccount(1002);
console.log("---------------");
findAccount(102)
