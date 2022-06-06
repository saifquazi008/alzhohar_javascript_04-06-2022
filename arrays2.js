let users = [
    { id: 101, username: "Haris", password: "Haris12", email: "Haris@gmail.com" },
    { id: 102, username: "mike", password: "mike12", email: "mike@gmail.com" },
    { id: 103, username: "Nazi", password: "Nazi12", email: "Nazi@gmail.com" },
    { id: 104, username: "Tony", password: "Tonyd12", email: "Tonyd@gmail.com" },
    { id: 105, username: "Asfar", password: "Asfai12", email: "Asfa@gmail.com" },
]

function findById() {
    let id = prompt("Enter user id :");
    for (const user of users) {
        if (user.id == id) {
            console.log(user);
        }

    }
}
findById();