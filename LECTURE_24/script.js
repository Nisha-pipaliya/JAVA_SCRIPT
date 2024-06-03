document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let user = {
        username: document.querySelector("#username").value,
        age: document.querySelector("#age").value,
        pswrd: document.querySelector("#pswrd").value
    };

    let flag = false;

    // Username validation
    let usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!usernameRegex.test(user.username)) {
        document.querySelector("#username").classList.add("error");
        document.querySelector("#username").classList.add("shake");
        document.querySelector("#username").classList.remove("success");
        document.querySelector("#username").nextElementSibling.textContent = "Invalid username. Must be 3-16 characters and can contain letters, numbers, underscores, and hyphens.";
        flag = true;
    } else {
        document.querySelector("#username").classList.add("success");
        document.querySelector("#username").classList.remove("error");
        document.querySelector("#username").classList.remove("shake");
        document.querySelector("#username").nextElementSibling.textContent = "";
    }

    // Age validation
    let age = parseInt(user.age);
    if (isNaN(age) || age < 18 || age > 120) {
        document.querySelector("#age").classList.add("error");
        document.querySelector("#age").classList.add("shake");
        document.querySelector("#age").classList.remove("success");
        document.querySelector("#age").nextElementSibling.textContent = "Invalid age. Must be a number between 0 and 120.";
        flag = true;
    } else {
        document.querySelector("#age").classList.add("success");
        document.querySelector("#age").classList.remove("error");
        document.querySelector("#age").classList.remove("shake");
        document.querySelector("#age").nextElementSibling.textContent = "";
    }

    // Password validation
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(user.pswrd)) {
        document.querySelector("#pswrd").classList.add("error");
        document.querySelector("#pswrd").classList.add("shake");
        document.querySelector("#pswrd").classList.remove("success");
        document.querySelector("#pswrd").nextElementSibling.textContent = "Invalid password. Must be at least 6 characters long and include a number, a lowercase letter, an uppercase letter, and a special character.";
        flag = true;
    } else {
        document.querySelector("#pswrd").classList.add("success");
        document.querySelector("#pswrd").classList.remove("error");
        document.querySelector("#pswrd").classList.remove("shake");
        document.querySelector("#pswrd").nextElementSibling.textContent = "";
    }

    if (flag) {
        if ('vibrate' in navigator) {
            navigator.vibrate(500); // Vibrate for 500ms
        }
        return;
    }

    alert("Form submitted successfully!");
});