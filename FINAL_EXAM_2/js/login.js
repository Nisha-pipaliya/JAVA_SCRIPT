

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;
    
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === loginEmail && user.password === loginPassword) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", true);
        window.location.href = "../index.html";  
    } else {
        alert("Invalid credentials. Please try again or sign up!");
    }
});

    // fetch('url...')
    // .then(response => response.json())
    // .then(users => {
    //     let user = users.find(user => user.email === email && user.password === password);
    //     if (user) {
    //         console.log('Login successful:', user);
            
    //     } else {
    //         alert('Invalid email or password');
    //     }
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });