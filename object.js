// object literal
let employee = {
    id: 100,
    name: "Saif",
    salary: 45909,
    email: "saif@gmail.com",
    dep: "Engineering"
}

// object literal
let employee1 = {
    id: 1000,
    name: "mike",
    salary: 2343,
    email: 'mike12@gmail.com',
    dept: "Engineering"
}
// create object via object constructor
let employee2 = new Object({
    id: 102,
    name: "jhon",
    salary: 8988,
    email: "jhon@gmail.com",
    dep: "engineering"
});

//object vi Employee constructor
function Employee(id, name, salary, dept) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
}



// console.log(employee);
console.log(employee1);
console.log("---------------");
console.log(employee2);
console.log(Employee);

// access properties from object via (.) operation
console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.email);
console.log(employee.dept);

console.log("------------------------");
// acces properties from object  via ['key'] operator
console.log(employee['id']);
console.log(employee['name']);
console.log(employee['salary']);
console.log(employee['email']);
console.log(employee['dept']);


console.log("------------------------");

Object.keys(employee).forEach((key) => {
    console.log(` Key : ${key}  and value : ${employee[key]}`);
})