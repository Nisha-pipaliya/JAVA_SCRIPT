// import json from "../db.json";
// -----GET AND DISPLAY
document.getElementById("course-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let course = document.getElementById("course").value;
    let course_img = document.getElementById("course_img").value;
    let title = document.getElementById("title").value;
    let sub_title = document.getElementById("sub_title").value;
    let fees = document.getElementById("fees").value;
    let disscount_fees = document.getElementById("disscount_fees").value;

    let newCourse = {
        course: course,
        imgUrl: course_img,
        course_title: title,
        subTitle: sub_title,
        fees: fees,
        disscountFees: disscount_fees,
        likes: 0
    };

    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));

    window.location.href = "/pages/dashboard.html";
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
