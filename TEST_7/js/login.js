import navbar from "/test_7/components/navbar.js";
import getValue from "/test_7/components/helper.js";

const userdetails = JSON.parse(localStorage.getItem("user"));

document.getElementById("navbar").innerHTML = navbar();

const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getValue("email"),
        password: getValue("password")
    };

    if (userdetails) {
        if (userdetails.email !== user.email) {
            alert("User not found with email: " + user.email);
        } else if (userdetails.password !== user.password) {
            alert("Password mismatch for email: " + user.email);
        } else {
            alert("Logged in as: " + user.email);
            localStorage.setItem("isLogin", true);
            document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
        }
    } else {
        alert("Please sign up first.");
        window.location.href = "/test_7/pages/signup.html";
    }
};

document.getElementById("loginForm").addEventListener("submit", handleData);