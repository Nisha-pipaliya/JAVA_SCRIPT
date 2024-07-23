// import json from "../db.json";

// ADDED HERE 
document.addEventListener("DOMContentLoaded", function() {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const tableBody = document.getElementById("course-table").getElementsByTagName("tbody")[0];

    const renderTable=()=> {
        tableBody.innerHTML = '';
        courses.forEach((course, index) => {
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = course.course;
            row.insertCell(1).innerHTML = `<img src="${course.imgUrl}" alt="${course.course_title}" width="50">`;
            row.insertCell(2).textContent = course.course_title;
            row.insertCell(3).textContent = course.subTitle;
            row.insertCell(4).textContent = course.fees;
            row.insertCell(5).textContent = course.disscountFees;
            let actionCell = row.insertCell(6);
            actionCell.classList.add("actions");
            actionCell.innerHTML = `
                <button onclick="likeCourse(${index})">Like (${course.likes})</button>
                <button onclick="removeCourse(${index})">Remove</button>
                <button onclick="showDetails(${index})">Show Details</button>
                <button onclick="purchaseCourse(${index})">Purchase Course</button>
            `;
        });
    }

    window.likeCourse = function(index) {
        courses[index].likes += 1;
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.removeCourse = function(index) {
        courses.splice(index, 1);
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.showDetails = function(index) {
        alert(`Course: ${courses[index].course}\nTitle: ${courses[index].course_title}\nSub-title: ${courses[index].subTitle}\nFees: ${courses[index].fees}\nDiscount Fees: ${courses[index].disscountFees}`);
    };

    window.purchaseCourse = function(index) {
        alert(`You have purchased the course: ${courses[index].course_title}`);
    };

    renderTable();
});

document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    const navbar = document.getElementById("navbar");

    if (user) {
        let roleDropdown = document.createElement("select");
        roleDropdown.id = "role-dropdown";
        roleDropdown.innerHTML = `
            <option value="user" ${user.role === "user" ? "selected" : ""}>User</option>
            <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
        `;
        roleDropdown.addEventListener("change", function() {
            let selectedRole = this.value;
            if (selectedRole === "admin") {
                alert("You are now an admin.");
            } else {
                alert("You are now a user.");
            }
        });
        navbar.appendChild(roleDropdown);
    }
});


//---------------------------------------------- DISPLY DATA 

document.addEventListener("DOMContentLoaded", function() {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const tableBody = document.getElementById("course-table").getElementsByTagName("tbody")[0];
    const searchBar = document.getElementById("search-bar");
    const sortPriceButton = document.getElementById("sort-price");
    const sortDiscountButton = document.getElementById("sort-discount");

    function renderTable(filteredCourses = courses) {
        tableBody.innerHTML = '';
        filteredCourses.forEach((course, index) => {
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = course.course;
            row.insertCell(1).innerHTML = `<img src="${course.imgUrl}" alt="${course.course_title}" width="50">`;
            row.insertCell(2).textContent = course.course_title;
            row.insertCell(3).textContent = course.subTitle;
            row.insertCell(4).textContent = course.fees;
            row.insertCell(5).textContent = course.disscountFees;
            let actionCell = row.insertCell(6);
            actionCell.classList.add("actions");
            actionCell.innerHTML = `
                <button onclick="likeCourse(${index})">Like (${course.likes})</button>
                <button onclick="removeCourse(${index})">Remove</button>
                <button onclick="showDetails(${index})">Show Details</button>
                <button onclick="purchaseCourse(${index})">Purchase Course</button>
            `;
        });
    }

    window.likeCourse = function(index) {
        courses[index].likes += 1;
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.removeCourse = function(index) {
        courses.splice(index, 1);
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.showDetails = function(index) {
        alert(`Course: ${courses[index].course}\nTitle: ${courses[index].course_title}\nSub-title: ${courses[index].subTitle}\nFees: ${courses[index].fees}\nDiscount Fees: ${courses[index].disscountFees}`);
    };

    window.purchaseCourse = function(index) {
        alert(`You have purchased the course: ${courses[index].course_title}`);
    };

    searchBar.addEventListener("input", function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredCourses = courses.filter(course => course.course.toLowerCase().includes(searchTerm));
        renderTable(filteredCourses);
    });

    sortPriceButton.addEventListener("click", function() {
        courses.sort((a, b) => a.fees - b.fees);
        renderTable();
    });

    sortDiscountButton.addEventListener("click", function() {
        courses.sort((a, b) => a.disscountFees - b.disscountFees);
        renderTable();
    });

    renderTable();
});


//------------------------------------------------- HANDLE COURSE DETAILS
document.addEventListener("DOMContentLoaded", function() {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const tableBody = document.getElementById("course-table").getElementsByTagName("tbody")[0];

    const renderTable=()=> {
        tableBody.innerHTML = '';
        courses.forEach((course, index) => {
            let row = tableBody.insertRow();
            row.insertCell(0).textContent = course.course;
            let imgCell = row.insertCell(1);
            let img = document.createElement("img");
            img.src = course.imgUrl;
            img.alt = course.course_title;
            img.width = 50;
            img.addEventListener("click", function() {
                localStorage.setItem("selectedCourse", JSON.stringify(course));
                window.location.href = "course_detail.html";
            });
            imgCell.appendChild(img);
            row.insertCell(2).textContent = course.course_title;
            row.insertCell(3).textContent = course.subTitle;
            row.insertCell(4).textContent = course.fees;
            row.insertCell(5).textContent = course.disscountFees;
            let actionCell = row.insertCell(6);
            actionCell.classList.add("actions");
            actionCell.innerHTML = `
                <button onclick="likeCourse(${index})">Like (${course.likes})</button>
                <button onclick="removeCourse(${index})">Remove</button>
                <button onclick="showDetails(${index})">Show Details</button>
                <button onclick="purchaseCourse(${index})">Purchase Course</button>
            `;
        });
    }

    window.likeCourse = function(index) {
        courses[index].likes += 1;
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.removeCourse = function(index) {
        courses.splice(index, 1);
        localStorage.setItem("courses", JSON.stringify(courses));
        renderTable();
    };

    window.showDetails = function(index) {
        alert(`Course: ${courses[index].course}\nTitle: ${courses[index].course_title}\nSub-title: ${courses[index].subTitle}\nFees: ${courses[index].fees}\nDiscount Fees: ${courses[index].disscountFees}`);
    };

    window.purchaseCourse = function(index) {
        alert(`You have purchased the course: ${courses[index].course_title}`);

    };

    renderTable();
});

    // ---------Optional: send user data to a server
    // fetch('http://localhost:3000/', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     window.location.href = "login.html";
    // })
    // .catch(error => console.error('Error:', error));
