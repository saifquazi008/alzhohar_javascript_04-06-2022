//class decleration
class Employee {
    // properties
    id;
    name;
    salary;
    dept;

    //constructor
    constructor(id, name, salary, dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    showId() {
        console.log(`The id is ${this.id}`);
    }
    showEmployee() {
        console.log(`The Employee :  
        id : ${this.id}
        name : ${this.name}
        salary :${this.salary}
        dept :${this.dept}`);
    }
}
let employee = new Employee(1001, "saif Quazi", 243463, "Dev");
console.log(employee);

//access properties
console.log(employee.id);
console.log(employee.name);
employee.showId();
employee.showEmployee();