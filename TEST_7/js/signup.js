

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href = "/login.html";
};

document.getElementById("signupForm").addEventListener("submit", handleData);
