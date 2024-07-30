
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

 });
