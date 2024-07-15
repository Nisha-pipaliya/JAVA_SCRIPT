const userdetails = JSON.parse(localStorage.getItem("user"));

const handleData = (e) => {
    e.preventDefault();
    
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    

    console.log("User input:", user);
    console.log("Stored user details:", userdetails);

    if (userdetails) {
        if (userdetails.email !== user.email) {
            alert("User not found with email: " + user.email);
        } else if (userdetails.password !== user.password) {
            alert("Password mismatch for email: " + user.email);
        } else {
            alert("Logged in as: " + user.email);
            localStorage.setItem("isLogin", true);

            window.location.href = "/index.html";
        }
    } else {
        alert("Please sign up first.");
        window.location.href = "/pages/signup.html";
    }
};

document.getElementById("loginForm").addEventListener("submit", handleData);
