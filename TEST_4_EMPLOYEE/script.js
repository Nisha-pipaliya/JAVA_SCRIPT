class Employee {
    constructor(employeeName, employeeId, salary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.salary = salary;
    }
}

// array::store data of this array
const employees = [];

const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    employees.forEach((ele, index) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.employeeId;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.employeeName;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.salary;
        tr.append(td1, td2, td3);
        document.getElementById("tbody").appendChild(tr);
    });
};

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let data = new Employee(
        document.querySelector("#employeeName").value,
        document.querySelector("#employeeId").value,
        parseFloat(document.querySelector("#salary").value)
    );
    employees.push(data);
    Display();
});

// work click to buy and salary has DEBIT

const DebitSalary = (index, price) => {
    if (employees[index].salary >= price) {
        employees[index].salary -= price;
        Display();
        alert(`Employee salary deducated  successfully! ${price}.`);
    } else {
        alert('The salary you entered is not sufficient!! '); // salary available nahin hoga toh ae work karga ...
    }
};
// main attach in HTML and click to buy
document.querySelectorAll(".buy-button").forEach((button, index) => {
    button.addEventListener("click", () => {
        //..
        let price = parseFloat(button.previousElementSibling.querySelector(".price").innerText.replace('$', ''));
        // HTML mein me button ke andar div me H3 ko call karta hai 
        let employeeIndex = 0;
        if (employees.length > 0) {
            DebitSalary(employeeIndex, price);
        } else {
            alert('No employees available.'); // employee available nahin hoga tab ae work karga ..
        }
    });
});