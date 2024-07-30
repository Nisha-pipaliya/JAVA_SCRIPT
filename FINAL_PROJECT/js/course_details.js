
document.addEventListener("DOMContentLoaded", function() {
    const course = JSON.parse(localStorage.getItem("selectedCourse"));
    if (course) {
        document.getElementById("course-title").textContent = course.course_title;
        document.getElementById("course-image").src = course.imgUrl;
        document.getElementById("course-subtitle").textContent = course.subTitle;
        document.getElementById("course-fees").textContent = course.fees;
        document.getElementById("course-discount-fees").textContent = course.disscountFees;
        document.getElementById("course-likes").textContent = course.likes;
        // ----------------------LIKE 
        document.getElementById("like-course").addEventListener("click", function() {
            course.likes += 1;
            localStorage.setItem("selectedCourse", JSON.stringify(course));
            localStorage.setItem("courses", JSON.stringify(JSON.parse(localStorage.getItem("courses")).map(c => c.course_title === course.course_title ? course : c)));
            document.getElementById("course-likes").textContent = course.likes;
        });
        // -------------------------REMOVE
        document.getElementById("remove-course").addEventListener("click", function() {
            let courses = JSON.parse(localStorage.getItem("courses"));
            courses = courses.filter(c => c.course_title !== course.course_title);
            localStorage.setItem("courses", JSON.stringify(courses));
            window.location.href = "/index.html"; 
            window.location.href="/index.html"
        });
        // --------------------------------SHOW DIFFRENT PAGE
        document.getElementById("show-details").addEventListener("click", function() {
            alert(`Course: ${course.course}\nTitle: ${course.course_title}\nSub-title: ${course.subTitle}\nFees: ${course.fees}\nDiscount Fees: ${course.disscountFees}`);
        });
        // -----------------------------------------PURCHASE COURSE
        document.getElementById("purchase-course").addEventListener("click", function() {
            alert(`You have purchased the course: ${course.course_title}`);
            let purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses")) || [];
            purchasedCourses.push(course);
            localStorage.setItem("purchasedCourses", JSON.stringify(purchasedCourses));
            window.location.href = "/index.html"; 
            window.location.href="/index.html"
        });
    } else {
        alert("No course selected");
        window.location.href = "/index.html"; 
        window.location.href="/index.html"
    }
});
