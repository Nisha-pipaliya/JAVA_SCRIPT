document.querySelector(".form").addEventListener("submit",(e)=>{
    e.preventDefault();
});

let user={
    username: document.querySelector("username").value,
    number: document.querySelector("number").value,
    password: document.querySelector("password").value

};

let flag=false;
if (user.username.length<2||user.username==null) {
    alert("invalid !! ")

    document.querySelector("#username").
    // style border 2px solid red;
    flag=true;
}
if (user.number.length != 10||user.number==null) {
    alert("invalid !! ")

    document.querySelector("#number").
    // style border 2px solid red;
    flag=true;
}
else{
    document.querySelector("#password").
    // style border 2px solid red;
}
if (flag) {
    return
}