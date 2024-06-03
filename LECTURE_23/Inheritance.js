class Office{
    #salary;
    constructor(id,name,number,salary){
        this.id=id;
        this.name=name;
        this.number=number;
        this.#salary=salary
    }

    getsalary(){
        return this.#salary
    }
    setsalary(salary){
        this.#salary=salary;
    }

    displayDetails(){
        return `id:${this.id},Nmae:${this.name},Number:${this.number},slaray:${this.salary}`
    }
}


class Manager extends Office{
    constructor(id,name,number,salary,department){
    super(id,name,number,salary)
    this.department=department
    }

    displayDetails() {
        return `${super.displayDetails()}, Department: ${this.department}`;
    }
}




class Employee extends Manager{
    constructor(id,name,number,salary,position){
        super(id,name,number,salary)
        this.position=position
    }

    displayDetails(){
        return`${super.displayDetails()},Department:${this.position}`
    }
}


let officePerson=new Office(1,"vick",12345,12000);
let Managerperson=new Manager(2,"shriva",1234,123000,"manager-devloper");
let Employeeperson=new Employee(3,"grishva",123456789,100000,"manager");


console.log(officePerson.displayDetails());
console.log(Managerperson.displayDetails());
console.log(Employeeperson.displayDetails());