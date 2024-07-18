let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));

if (!isLogin) {
    window.location.href = "/signup.html"; 
}

let places = JSON.parse(localStorage.getItem("places")) || [];

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        cost: parseFloat(document.getElementById("package").value),  
        description: document.getElementById("description").value,
        likes: 0,  
        shares: 0,  
        comments: [],  
        id: places.length === 0 ? 1 : places[places.length - 1].id + 1
    };
    places.push(product);
    localStorage.setItem("places", JSON.stringify(places));
    window.location.href = "/index.html";
};

document.getElementById("PlaceData").addEventListener("submit", handleData);
