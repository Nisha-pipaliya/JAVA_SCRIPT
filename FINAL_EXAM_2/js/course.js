document.getElementById("course").addEventListener("submit", function(event) {
    event.preventDefault();

    let course=document.getElementById("course").value
    let course_img = document.getElementById("course_img").value
    let title=document.getElementById("title").value
    let sub_title=document.getElementById("sub_title").value
    let fees=document.getElementById("fees").value
    let disscount_fees=document.getElementById("disscount_fees").value

    let newCourse={
        course: course,
        imgUrl:course_img,
        course_title : title,
        subTitle:sub_title,
        fees: fees,
        disscountFees:disscount_fees
        
    }

});