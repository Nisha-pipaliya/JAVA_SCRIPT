import navbar from "/test_7/components/navbar.js";
import getValue from "/test_7/components/helper.js";

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password")
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href = "/test_7/";
};

document.getElementById("signupForm").addEventListener("submit", handleData);
document.getElementById("navbar").innerHTML = navbar();