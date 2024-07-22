document.addEventListener('DOMContentLoaded', () => {
  
    const handleData = (e) => {
        e.preventDefault();
        let newFood = {
            title: document.getElementById("food-name").value,
            img: document.getElementById("img").value,
            price: parseFloat(document.getElementById("food-price").value),  
            description: document.getElementById("food-description").value,  
            id: food-form.length === 0 ? 1 : food-form[food-form.length - 1].id + 1
        };
        places.push(newFood);
        localStorage.setItem("food-form", JSON.stringify(food-form));
        window.location.href = "/index.html"
    };

    document.getElementById("food-form").addEventListener("submit", handleData);
});


let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));

if (!isLogin) {
    window.location.href = "/signup.html"; 
}

