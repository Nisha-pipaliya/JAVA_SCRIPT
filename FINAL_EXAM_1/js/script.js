

document.addEventListener('DOMContentLoaded', () => {


    // let userdetails = JSON.parse(localStorage.getItem("user"));
    // let isLogin = localStorage.getItem("isLogin") || false;
    // if (!isLogin) {
    //     window.location.href = "/pages/login.html";
    // }


    const foodList = document.getElementById('food-list');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const sortBySelect = document.getElementById('sort-by');

    const renderFoods = (foodsToRender) => {
        foodList.innerHTML = "";
        foodsToRender.forEach(food => {
            let foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            let foodImg = document.createElement('img');
            foodImg.src = food.imgUrl;
            foodImg.alt = food.name;
            foodItem.append(foodImg);

            let foodName = document.createElement('h3');
            foodName.textContent = food.name;
            foodItem.append(foodName);

            let foodCategory = document.createElement('p');
            foodCategory.textContent = `Category: ${food.category}`;
            foodItem.append(foodCategory);

            let foodCalories = document.createElement('p');
            foodCalories.textContent = `Calories: ${food.calories}`;
            foodItem.append(foodCalories);

            let foodIngredients = document.createElement('p');
            foodIngredients.textContent = `Ingredients: ${food.ingredients.join(', ')}`;
            foodItem.append(foodIngredients);

            let foodPrice = document.createElement('p');
            foodPrice.textContent = `Price: $${food.price}`;
            foodItem.append(foodPrice);

            foodList.append(foodItem);
        });
    };

    const filterAndSortFoods = () => {
        let filteredFoods = foods.foods;

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredFoods = filteredFoods.filter(food =>
                food.name.toLowerCase().includes(searchTerm) ||
                food.category.toLowerCase().includes(searchTerm)
            );
        }

        const selectedCategory = categoryFilter ? categoryFilter.value : "";
        if (selectedCategory && selectedCategory !== "All") {
            filteredFoods = filteredFoods.filter(food =>
                food.category == selectedCategory
            );
        }

        const sortBy = sortBySelect ? sortBySelect.value : "";
        if (sortBy) {
            filteredFoods.sort((a, b) => {
                if (sortBy === 'price-asc') {
                    return a.price - b.price;
                } else if (sortBy === 'price-desc') {
                    return b.price - a.price;
                }
                return 0;
            });
        }

        renderFoods(filteredFoods);
    };

    renderFoods(foods.foods);

    searchInput.addEventListener('input', filterAndSortFoods);
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndSortFoods);
    if (sortBySelect) sortBySelect.addEventListener('change', filterAndSortFoods);
});



document.addEventListener('DOMContentLoaded', () => {
    const foodList = document.getElementById('food-list');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const sortBySelect = document.getElementById('sort-by');

    // Fetch the foods from localStorage
    let storedFoods = localStorage.getItem("foods");
    let foods = storedFoods ? JSON.parse(storedFoods) : { foods: [] };

    const renderFoods = (foodsToRender) => {
        foodList.innerHTML = "";
        foodsToRender.forEach(food => {
            let foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            let foodImg = document.createElement('img');
            foodImg.src = food.imgUrl;
            foodImg.alt = food.name;
            foodItem.append(foodImg);

            let foodName = document.createElement('h3');
            foodName.textContent = food.name;
            foodItem.append(foodName);

            let foodCategory = document.createElement('p');
            foodCategory.textContent = `Category: ${food.category}`;
            foodItem.append(foodCategory);

            let foodCalories = document.createElement('p');
            foodCalories.textContent = `Calories: ${food.calories}`;
            foodItem.append(foodCalories);

            let foodIngredients = document.createElement('p');
            foodIngredients.textContent = `Ingredients: ${food.ingredients.join(', ')}`;
            foodItem.append(foodIngredients);

            let foodPrice = document.createElement('p');
            foodPrice.textContent = `Price: $${food.price}`;
            foodItem.append(foodPrice);

            foodList.append(foodItem);
        });
    };

    const filterAndSortFoods = () => {
        let filteredFoods = foods.foods;

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredFoods = filteredFoods.filter(food =>
                food.name.toLowerCase().includes(searchTerm) ||
                food.category.toLowerCase().includes(searchTerm)
            );
        }

        const selectedCategory = categoryFilter ? categoryFilter.value : "";
        if (selectedCategory && selectedCategory !== "All") {
            filteredFoods = filteredFoods.filter(food =>
                food.category == selectedCategory
            );
        }

        const sortBy = sortBySelect ? sortBySelect.value : "";
        if (sortBy) {
            filteredFoods.sort((a, b) => {
                if (sortBy === 'price-asc') {
                    return a.price - b.price;
                } else if (sortBy === 'price-desc') {
                    return b.price - a.price;
                }
                return 0;
            });
        }

        renderFoods(filteredFoods);
    };

    renderFoods(foods.foods);

    searchInput.addEventListener('input', filterAndSortFoods);
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndSortFoods);
    if (sortBySelect) sortBySelect.addEventListener('change', filterAndSortFoods);
});





// ---------------------------NEW LOCATION

const geoFindMe = () => {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
    const foodList = document.querySelector("#food-list");

    mapLink.href = "";
    mapLink.textContent = "";

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "Fetching location data...";

        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
                const userCity = data.address.city || data.address.town || data.address.village;

                status.textContent = `You are in ${userCity}`;
                mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

                displayFoodList(userCity);
            })
            .catch(error => {
                status.textContent = "Unable to retrieve location data";
            });
    }

    const error = (err) => {
        if (err.code === err.PERMISSION_DENIED) {
            alert("Geolocation permission is denied. You need to allow location access for full functionality.");
        } else {
            status.textContent = "Unable to retrieve your location";
        }
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

const displayFoodList = (userCity) => {
    const foodList = document.querySelector("#food-list");
    const foodItems = [
        { name: "Pizza", city: "Surat" },
        { name: "Burger", city: "Ahmedabad" },
        { name: "Pasta", city: "Mumbai" },
        // Add more food items as needed
    ];

    const filteredFoodItems = foodItems.filter(item => item.city === userCity);

    if (filteredFoodItems.length > 0) {
        foodList.innerHTML = `<h3>Available food items in ${userCity}:</h3>`;
        filteredFoodItems.forEach(item => {
            foodList.innerHTML += `<p>${item.name}</p>`;
        });
    } else {
        alert("You are not in a city where we deliver food. You cannot order.");
        foodList.innerHTML = `<p>No available food items for your location.</p>`;
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

// Optional: Check and request permission on page load
document.addEventListener("DOMContentLoaded", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            () => {},  // Do nothing on success
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    alert("Geolocation permission is denied. You need to allow location access for full functionality.");
                }
            }
        );
    }
});



