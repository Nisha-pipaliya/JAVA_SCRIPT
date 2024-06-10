let signup =[].JSON.parse(localStorage.getItem("signup")) || {};

const handleData =(e) =>{
    e.preventDefault();

    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;


let passElement = document.createElement('p');
passElement.innerHTML = `pass: ${pass}`;

let emailElement = document.createElement('p');
emailElement.innerHTML = `email: ${email}`;


profileElement.append(passElement);
profileElement.append(emailElement);

if(signup.pass==login.pass && signup.email == login.email){
    alert("successfully")
    document.getElementById("login-form").addEventListener("submit" ,handleData);
}
else{
    alert("not successfully")
}
document.getElementById("login-form").addEventListener("submit" ,handleData);
}

