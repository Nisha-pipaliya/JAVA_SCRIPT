
let products = [];

const api = (data) => {
    document.getElementById("products").innerHTML = "";
    data.map((ele) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.thumbnail;

        let title = document.createElement("h4");
        title.textContent = ele.title;

        let price = document.createElement("h3");
        price.textContent = `Price: $${ele.price}`;

        let category = document.createElement("h3");
        category.textContent = `Category: ${ele.category}`;

        let rating = document.createElement("h3");
        rating.textContent = `Rating: ${ele.rating}`;

        let button = document.createElement("button");
        button.textContent = "View Details";
        button.addEventListener("click", () => {
            localStorage.setItem("product", JSON.stringify(ele));
            window.location.href = "./product.html";
        });

        div.append(image, title, price, category, rating, button);
        document.getElementById("products").append(div);
    });
};

const getData = async () => {
    try {
        let request = await fetch("https://dummyjson.com/products/");
        let response = await request.json();
        products = response.products;
        api(products);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getData();

const handleSort = (orderBy) => {
    let sortedProducts = [];
    if (orderBy === "LTH") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    api(sortedProducts);
};

const handleFilter = (category) => {
    let filteredProducts = products.filter((ele) => ele.category === category);
    api(filteredProducts);
};

const handleSearch = (value) => {
    let searchedProducts = products.filter((ele) =>
         ele.title.toLowerCase().includes(value.toLowerCase()));
    api(searchedProducts);
};

const handleSearchData = (e) => {
    e.preventDefault();
    let value = document.getElementById("searchValue").value;
    handleSearch(value);
};

const handleInput = (e) => {
    let value = document.getElementById("searchValue").value;
    handleSearch(value);
    if (e.key === "Enter") {
        handleSearch(value);
    }
};

document.getElementById("searchValue").addEventListener("keypress", handleInput);
document.getElementById("searching").addEventListener("submit", handleSearchData);
document.getElementById("LTH").addEventListener("click", () => handleSort("LTH"));
document.getElementById("HTL").addEventListener("click", () => handleSort("HTL"));
document.getElementById("beauty").addEventListener("click", () => handleFilter("beauty"));
document.getElementById("fragrances").addEventListener("click", () => handleFilter("fragrances"));
document.getElementById("furniture").addEventListener("click", () => handleFilter("furniture"));
document.getElementById("groceries").addEventListener("click", () => handleFilter("groceries"));
