class Office {
    #salary;
    constructor(id, name, number, salary) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.#salary = salary;
    }

    getsalary() {
        return this.#salary;
    }

    setsalary(salary) {
        this.#salary = salary;
    }

    displayDetails() {
        return `id: ${this.id}, Name: ${this.name}, Number: ${this.number}, Salary: ${this.#salary}`;
    }
}

class Manager extends Office {
    constructor(id, name, number, salary, department) {
        super(id, name, number, salary);
        this.department = department;
    }

    displayDetails() {
        return `${super.displayDetails()}, Department: ${this.department}`;
    }
}

class Employee extends Manager {
    constructor(id, name, number, salary, position) {
        super(id, name, number, salary, position);
        this.position = position;
    }

    displayDetails() {
        return `${super.displayDetails()}, Position: ${this.position}`;
    }
}
class client extends Office{
    constructor(id, name, number, salary,work){
        super(id, name, number, salary);
        this.work=work;
    }
    displayDetails(){
    return`${super.displayDetails()},work:${this.work}`;
    }
}

let officePerson = new Office(1, "Vicky", 12345, 12000);
let managerPerson = new Manager(2, "Shriva", 1234, 123000, "Development Manager");
let employeePerson = new Employee(3, "Grishva", 123456789, 100000, "financer");
let clientperson = new client(4,"grishma",123456,120000,"empolyee","client");

document.getElementById('officePerson').innerHTML = officePerson.displayDetails();
document.getElementById('managerPerson').innerHTML = managerPerson.displayDetails();
document.getElementById('employeePerson').innerHTML = employeePerson.displayDetails();
document.getElementById('clientperson').innerHTML= clientperson.displayDetails();