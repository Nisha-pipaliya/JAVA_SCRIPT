
  
document.addEventListener('DOMContentLoaded', () => {
    let foods = {
        "foods": [
            {
                "name": "Pizza",
                "category": "Main Course",
                "calories": 250,
                "ingredients": ["Dough", "Tomato Sauce", "Cheese"],
                "price": 10.99,
                "imgUrl": "https://i.pinimg.com/736x/f9/6b/d8/f96bd8d65e30ea005ae52bf06e32cfe8.jpg"
            },
            {
                "name": "Burger",
                "category": "Main Course",
                "calories": 350,
                "ingredients": ["Bun", "Beef Patty", "Lettuce", "Tomato", "Cheese"],
                "price": 8.99,
                "imgUrl": "https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291338_0J8Q8vYbKDCu8yqqwAO8PsQZ4ESP2zd8.jpg"
              },
              {
                "name": "Salad",
                "category": "Appetizer",
                "calories": 150,
                "ingredients": ["Lettuce", "Tomato", "Cucumber", "Olives", "Feta Cheese"],
                "price": 6.99,
                "imgUrl": "https://i.pinimg.com/736x/40/2a/99/402a99c710f1da71b9f1f95632b70e08.jpg"
              },
              {
                "name": "Pasta",
                "category": "Main Course",
                "calories": 400,
                "ingredients": ["Pasta", "Tomato Sauce", "Garlic", "Basil", "Parmesan"],
                "price": 12.99,
                "imgUrl": "https://img.freepik.com/free-psd/top-view-delicious-food_23-2150634080.jpg"
              },
              {
                "name": "Ice Cream",
                "category": "Dessert",
                "calories": 200,
                "ingredients": ["Milk", "Sugar", "Cream", "Vanilla"],
                "price": 4.99,
                "imgUrl": "https://t3.ftcdn.net/jpg/05/66/23/46/360_F_566234629_KhWxmzVVGHg8iHnbiuMR0kNgFhbSE7g8.jpg"
              },
              {
                "name": "Sushi",
                "category": "Main Course",
                "calories": 300,
                "ingredients": ["Rice", "Seaweed", "Fish", "Soy Sauce"],
                "price": 14.99,
                "imgUrl": "https://www.shutterstock.com/image-photo/sushi-roll-chopsticks-isolated-on-260nw-1695244495.jpg"
              },
              {
                "name": "Tacos",
                "category": "Main Course",
                "calories": 250,
                "ingredients": ["Tortilla", "Beef", "Lettuce", "Cheese", "Salsa"],
                "price": 9.99,
                "imgUrl": "https://atlas-content-cdn.pixelsquid.com/stock-images/crunchy-taco-z0A3dVD-600.jpg"
              },
              {
                "name": "Soup",
                "category": "Appetizer",
                "calories": 100,
                "ingredients": ["Broth", "Vegetables", "Salt", "Pepper"],
                "price": 5.99,
                "imgUrl": "https://www.pngkey.com/png/detail/206-2063378_soup-download-transparent-png-image-mix-veg-soup.png"
              },
              {
                "name": "Steak",
                "category": "Main Course",
                "calories": 450,
                "ingredients": ["Beef", "Salt", "Pepper", "Garlic"],
                "price": 19.99,
                "imgUrl": "https://www.kindpng.com/picc/m/20-206592_steak-meat-png-transparent-png.png"
              },
              {
                "name": "Fries",
                "category": "Side",
                "calories": 300,
                "ingredients": ["Potatoes", "Salt", "Oil"],
                "price": 3.99,
                "imgUrl": "https://i.pinimg.com/736x/70/49/61/704961d2f6aff08cddc62f937000f0cc.jpg"
              },
              {
                "name": "Smoothie",
                "category": "Drink",
                "calories": 150,
                "ingredients": ["Fruit", "Yogurt", "Honey"],
                "price": 5.99,
                "imgUrl": "https://i.pinimg.com/736x/96/83/44/9683447528d7e67b068c96a7ee80cc33.jpg"
              },
              {
                "name": "Pancakes",
                "category": "Breakfast",
                "calories": 350,
                "ingredients": ["Flour", "Milk", "Eggs", "Syrup"],
                "price": 7.99,
                "imgUrl": "https://atlas-content-cdn.pixelsquid.com/stock-images/american-pancakes-pancake-D5Qw4aB-600.jpg"
              },
              {
                "name": "Grilled Cheese",
                "category": "Snack",
                "calories": 400,
                "ingredients": ["Bread", "Butter", "Cheese"],
                "price": 4.99,
                "imgUrl": "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yM19kaWdpdGFsX3BhaW50X29mX2dyaWxsZWRfY2hlZXNlX2lzb2xhdGVkX29uX18zM2UzOTcxMi02ZWUxLTRiOTItYTY0Ni1hNTRjYmU1ODkxYmRfMS5qcGc.jpg"
              },
              {
                "name": "Chicken Wings",
                "category": "Appetizer",
                "calories": 250,
                "ingredients": ["Chicken", "Spices", "Sauce"],
                "price": 8.99,
                "imgUrl": "https://img.freepik.com/free-photo/meat-meal-baked-lunch-delicious_1203-5498.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user"
              },
              {
                "name": "Brownie",
                "category": "Dessert",
                "calories": 300,
                "ingredients": ["Chocolate", "Butter", "Sugar", "Flour"],
                "price": 3.99,
                "imgUrl": "https://img.freepik.com/free-photo/chocolate-brownie-portion-isolated-white-background_123827-27904.jpg"
              }
          
        ]
    };
    //------------------------------------------------  DISPLAY FOOD
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

        // --------------------------------------------------SEARCH
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredFoods = filteredFoods.filter(food =>
                food.name.toLowerCase().includes(searchTerm) ||
                food.category.toLowerCase().includes(searchTerm)
            );
        }

        // ---------------------------------------------------CATEGORY
        const selectedCategory = categoryFilter ? categoryFilter.value : "";
        if (selectedCategory && selectedCategory !== "All") {
            filteredFoods = filteredFoods.filter(food =>
                food.category == selectedCategory
            );
        }

        // -----------------------------------------SHORTING
        const sortBy = sortBySelect ? sortBySelect.value : "";
        if (sortBy) {
            filteredFoods.sort((a, b) => {
                if (sortBy === 'name-asc') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'name-desc') {
                    return b.name.localeCompare(a.name);
                } else if (sortBy === 'price-asc') {
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
