
// import json from "../db.json";
// ------GET DATA 

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let user = {
        username: username,
        email: email,
        password: password,
        role: role
    };

    // -----------Store the user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please log in.");

    //------------ Redirect to login page
    window.location.href = "login.html";

    // ---------Optional: send user data to a server
//     fetch('http://localhost:3000/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         window.location.href = "login.html";
//     })
//     .catch(error => console.error('Error:', error));
 });
