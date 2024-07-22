
// // let isLogin = localStorage.getItem("isLogin") || false;
// // let userdetails = JSON.parse(localStorage.getItem("user"));

// // if (!isLogin) {
// //     window.location.href = "/signup.html"; 
// // }
// document.getElementById("add-food-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Fetch the current foods from localStorage
//     let storedFoods = localStorage.getItem("foods");
//     let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

//     // Collect form data
//     let foodName = document.getElementById("food-name").value;
//     let foodCategory = document.getElementById("food-category").value;
//     let foodCalories = document.getElementById("food-calories").value;
//     let foodIngredients = document.getElementById("food-ingredients").value.split(',');
//     let foodPrice = document.getElementById("food-price").value;
//     let foodImgUrl = document.getElementById("food-img-url").value;

//     // Create new food object
//     let newFood = {
//         name: foodName,
//         category: foodCategory,
//         calories: foodCalories,
//         ingredients: foodIngredients,
//         price: foodPrice,
//         imgUrl: foodImgUrl
//     };

//     // Add the new food to the foods array
//     foods.foods.push(newFood);

//     // Save updated foods to localStorage
//     localStorage.setItem("foods", JSON.stringify(foods));

//     // Alert and redirect
//     alert("Food added successfully!");
//     window.location.href = "../index.html";
// });





















document.getElementById("add-food-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch the current foods from localStorage
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    // Collect form data
    let foodName = document.getElementById("food-name").value;
    let foodCategory = document.getElementById("food-category").value;
    let foodCalories = document.getElementById("food-calories").value;
    let foodIngredients = document.getElementById("food-ingredients").value.split(',');
    let foodPrice = document.getElementById("food-price").value;
    let foodImgUrl = document.getElementById("food-img-url").value;

    // Create new food object
    let newFood = {
        id: Date.now(),
        name: foodName,
        category: foodCategory,
        calories: foodCalories,
        ingredients: foodIngredients,
        price: foodPrice,
        imgUrl: foodImgUrl,
        likes: 0,
        comments: [],
        quantity: 1
    };

    // Add the new food to the foods array
    foods.foods.push(newFood);

    // Save updated foods to localStorage
    localStorage.setItem("foods", JSON.stringify(foods));

    // Alert and redirect
    alert("Food added successfully!");
    window.location.href = "../index.html";
});

function displayFoodList() {
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };
    let foodListDiv = document.getElementById("food-list");
    foodListDiv.innerHTML = "";

    foods.foods.forEach(food => {
        let foodDiv = document.createElement("div");
        foodDiv.className = "food-item";
        foodDiv.innerHTML = `
            <img src="${food.imgUrl}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>Category: ${food.category}</p>
            <p>Calories: ${food.calories}</p>
            <p>Price: $${food.price}</p>
            <p>Quantity: <span id="quantity-${food.id}">${food.quantity}</span></p>
            <p>Likes: <span id="likes-${food.id}">${food.likes}</span></p>
            <button onclick="likeFood(${food.id})">Like</button>
            <button onclick="commentFood(${food.id})">Comment</button>
            <button onclick="incrementQuantity(${food.id})">+</button>
            <button onclick="decrementQuantity(${food.id})">-</button>
            <button onclick="deleteFood(${food.id})">Delete</button>
            <button onclick="buoyFood(${food.id})">Buoy</button>
            <p>Comments:</p>
            <ul id="comments-${food.id}">
                ${food.comments.map(comment => `<li>${comment}</li>`).join('')}
            </ul>
        `;
        foodListDiv.appendChild(foodDiv);
    });
}

function likeFood(foodId) {
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    let food = foods.foods.find(f => f.id === foodId);
    food.likes += 1;

    localStorage.setItem("foods", JSON.stringify(foods));
    displayFoodList();
}

function commentFood(foodId) {
    let comment = prompt("Enter your comment:");
    if (comment) {
        let storedFoods = localStorage.getItem("foods");
        let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

        let food = foods.foods.find(f => f.id === foodId);
        food.comments.push(comment);

        localStorage.setItem("foods", JSON.stringify(foods));
        displayFoodList();
    }
}

function incrementQuantity(foodId) {
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    let food = foods.foods.find(f => f.id === foodId);
    food.quantity += 1;

    localStorage.setItem("foods", JSON.stringify(foods));
    displayFoodList();
}

function decrementQuantity(foodId) {
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    let food = foods.foods.find(f => f.id === foodId);
    if (food.quantity > 1) {
        food.quantity -= 1;
    }

    localStorage.setItem("foods", JSON.stringify(foods));
    displayFoodList();
}

function deleteFood(foodId) {
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    foods.foods = foods.foods.filter(f => f.id !== foodId);

    localStorage.setItem("foods", JSON.stringify(foods));
    alert("Food deleted successfully!");
    displayFoodList();
}

function buoyFood(foodId) {
    alert("Buoy successfully!");
}

// Initial display of food list
document.addEventListener("DOMContentLoaded", displayFoodList);
