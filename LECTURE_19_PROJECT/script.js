



let form = document.getElementById("employeeForm");
let tableBody = document.getElementById("employeeData");
let activeEmployeeCount = document.getElementById("activeEmployeeCount");
let totalSalary = document.getElementById("totalSalary");

let employees = [];

const submitForm = (event)=>  {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let jobRole = document.getElementById("jobRole").value;
    let department = document.getElementById("department").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let contactEmail = document.getElementById("contactEmail").value;
    let workExperience = parseInt(document.getElementById("workExperience").value);

    if (!name || !jobRole || !department || !salary || !contactEmail || !workExperience) {
        alert("Please fill in all fields.");
        return;
    }

    let roleType = workExperience > 5 ? "Senior" : "Junior";

    let employee = {
        name: name,
        jobRole: jobRole,
        department: department,
        salary: salary,
        contactEmail: contactEmail,
        workExperience: workExperience,
        roleType: roleType
    };
    employees.push(employee);
    DataTable();
    updateCounts();
    form.reset();
}
const  DataTable=()=> {
    tableBody.innerHTML = "";
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.jobRole}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.contactEmail}</td>
            <td>${employee.workExperience}</td>
            <td>${employee.roleType}</td>
            <td><button onclick="deleteEmployee(${i})">Delete</button></td>  `;
       
        tableBody.appendChild(row);
    }
}

const deleteEmployee=(index)=> {
    employees.splice(index, 1);
    DataTable();
    updateCounts();
}

const updateCounts=()=> {
    let totalCount = 0;
    let totalSalaryCount = 0;
    for (let i = 0; i < employees.length; i++) {
        totalCount++;
        totalSalaryCount += employees[i].salary;
    }
    activeEmployeeCount.textContent = totalCount;
    totalSalary.textContent = totalSalaryCount;
}
