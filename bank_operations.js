let accounts = [
    { id: 1001, username: "Saif", password: "Saif123", email: "Saif@gmail.com", balance: 500000 },
    { id: 1002, username: "Haris", password: "Haris123", email: "Haris@gmail.com", balance: 2000 },
    { id: 1003, username: "Shahid", password: "Shahid123", email: "Shahid@gmail.com", balance: 10000 },
    { id: 1004, username: "David", password: "David123", email: "David@gmail.com", balance: 3000 },
    { id: 1005, username: "Tony", password: "Tony123", email: "Tony@gmail.com", balance: 90000 },
]

function findAccount(id) {
    let match = false;
    for (const acc of accounts) {
        if (acc.id == id) {
            console.log(`The user '${acc.username}' balance is : '${acc.balance}'`);
            match = true;
            return acc;
        }
    }
    if (!match) {
        console.log("account not found !");
        return null;
    }
}
function showBalance() {
    alert("Wellcome to lena Dena Bank");
    let id = prompt("Enter User Account Id :")
    let acc = findAccount(id);
}
function withdrawAmount() {
    alert("Wellcome to Lena Dena Bank");
    let id = prompt("Enter User Account id :");
    let amount = prompt("Enter Amount To Withdraw :");
    let acc = findAccount(id);
    if (acc != null) {
        acc.balance -= amount;
        console.log(`The user '${acc.username}' balance is : '${acc.balance}'`);
    }
}
    function depositeAmount() {
        alert("Welcome to Lena Dena Bank !");
        let id = prompt("Enter User Account Id :");
        let amount = prompt("Enter amount to deposite :");
        let acc = findAccount(id);
        if (acc != null) {
            acc.balance += Number(amount);
            console.log(`The user '${acc.username}' balance is : '${acc.balance}'`);
        }

    }

// showBalance();
// withdrawAmount();
depositeAmount();