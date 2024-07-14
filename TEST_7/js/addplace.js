import navbar from "../components/navbar.js";
import getValue from "../components/helper.js";

let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));

if (!isLogin) {
    window.location.href = "/test_7/pages/signup.html"; 
}

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar();
}

let places = JSON.parse(localStorage.getItem("places")) || [];

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: getValue("title"),
        img: getValue("img"),
        package: getValue("pakage"),
        description: getValue("description"),
        id: places.length === 0 ? 1 : places[places.length - 1].id + 1
    };
    places.push(product);
    localStorage.setItem("places", JSON.stringify(places));
    window.location.href = "/test_7/index.html";
};

document.getElementById("PlaceData").addEventListener("submit", handleData);