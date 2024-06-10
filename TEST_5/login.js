document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;
    
    let user = JSON.parse(localStorage.getItem("user"));
    
    if (user && user.email === loginEmail && user.password === loginPassword) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", true);
        window.location.href = "./TEST_5/home.html";
     
    } else {
        alert("Please fill out the sign up form below !");
    }
});

