// import json from "../db.json";
//----DATA DISPLAY
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;
    
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === loginEmail && user.password === loginPassword) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("role", user.role);
        window.location.href = "../index.html";
    } else {
        alert("Invalid credentials. Please try again or sign up!");
    }
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



