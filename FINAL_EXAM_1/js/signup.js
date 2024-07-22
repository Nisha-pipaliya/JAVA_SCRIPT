document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let Pno = document.getElementById("Pno").value; 
    let City = document.getElementById("City").value;
    let user = {
        fullName: fullName,
        email: email,
        password: password,
        city: City,
        Pno:Pno
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/pages/login.html";
});
