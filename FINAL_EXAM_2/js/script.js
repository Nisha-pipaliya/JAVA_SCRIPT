// import json from "../db.json";
// IMG USER PURCHASE 
document.addEventListener("DOMContentLoaded", function() {
    let purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses")) || [];
    const purchasedCoursesContainer = document.getElementById("purchased-courses-container");

    function renderPurchasedCourses() {
        purchasedCoursesContainer.innerHTML = '';
        purchasedCourses.forEach((course, index) => {
            let courseElement = document.createElement("div");
            courseElement.classList.add("course");

            courseElement.innerHTML = `
                <h2>${course.course_title}</h2>
                <img src="${course.imgUrl}" alt="${course.course_title}" width="100">
                <p>${course.subTitle}</p>
                <p>Fees: ${course.fees}</p>
                <p>Discount Fees: ${course.disscountFees}</p>
                <button onclick="showDetails(${index})">Show Details</button>
                <button onclick="removePurchasedCourse(${index})">Remove</button>
            `;
            purchasedCoursesContainer.appendChild(courseElement);
        });
    }

    window.showDetails = function(index) {
        const course = purchasedCourses[index];
        alert(`Course: ${course.course}\nTitle: ${course.course_title}\nSub-title: ${course.subTitle}\nFees: ${course.fees}\nDiscount Fees: ${course.disscountFees}`);
    };

    window.removePurchasedCourse = function(index) {
        purchasedCourses.splice(index, 1);
        localStorage.setItem("purchasedCourses", JSON.stringify(purchasedCourses));
        renderPurchasedCourses();
    };

    renderPurchasedCourses();
});




//------ PORTAL

const hamb = document.querySelector("#nav-icon");
const menu = document.querySelector(".menubox");

hamb.addEventListener("click", function () {
  hamb.classList.toggle("open");
  menu.classList.toggle("menu-open");
});


const dashbtn = document.querySelector("#dashbutton");
const dashbtnmenu = document.querySelector("#dashbuttonmenu");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#loginmodal");
const closebtn = document.querySelector("#closebtn");

const handlemodal=()=> {
  modal.style.display = "block";
  overlay.style.display = "block";
  document.body.style.position = "fixed";
}
function modalclose() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.body.style.position = "relative";
}
dashbtn.addEventListener("click", handlemodal);
dashbtnmenu.addEventListener("click", handlemodal);
closebtn.addEventListener("click", modalclose);
overlay.addEventListener("click", modalclose);

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

