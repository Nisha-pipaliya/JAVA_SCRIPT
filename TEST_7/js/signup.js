

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password")
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href = "/TEST_7/pages/login.html";
};

document.getElementById("signupForm").addEventListener("submit", handleData);
document.getElementById("navbar").innerHTML = navbar();