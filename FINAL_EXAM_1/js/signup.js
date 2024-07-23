document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let Pno = document.getElementById("Pno").value; 
    let City = document.getElementById("City").value;
    let user = {
        fullName: fullName,
        email: email,
        password: password,
        city: City,
        Pno: Pno
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "login.html";
});

fetch('http://localhost:3000/foods', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    window.location.href = "login.html";
})
.catch((error) => {
    console.error('Error:', error);
});




// document.getElementById("signup-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     let fullName = document.getElementById("fullname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let Pno = document.getElementById("Pno").value; 
//     let City = document.getElementById("City").value;
    
//     let user = {
//         fullName: fullName,
//         email: email,
//         password: password,
//         city: City,
//         Pno: Pno
//     };

    // fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     window.location.href = "login.html";
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
// });


