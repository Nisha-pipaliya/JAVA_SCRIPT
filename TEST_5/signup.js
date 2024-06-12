document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;
    let user = {
        fullName: fullName,
        email: email,
        imgUrl: imgUrl,
        password: password,
        country: country
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./login.html";
});
