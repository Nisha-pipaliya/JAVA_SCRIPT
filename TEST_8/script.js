const api = (data) => {
    data.products.map((ele) => {
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

        div.append(image, title, price, category, rating);
        document.getElementById("products").append(div);
    });
};

const getData = async () => {
    try {
        let request = await fetch("https://dummyjson.com/products/");
        let response = await request.json();
        api(response);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getData();

// sidebar

const HandleSort = (orderBy) => {
    if (orderBy == "LTH") {
        let temp = proudcts.sort((a, b) => a.price - b.price)
        api(temp)
        console.log(temp);
    }
    else {
        let temp = proudcts.sort((a, b) => b.price - a.price)
        console.log(temp);
        api(temp)
    }

}

const handleFilter = (category) => {
    let temp = proudcts.filter((ele) => ele.category == category)
    api(temp)

}

// searching 

const handleSearch = (value) => {
    let temp = proudcts.filter((ele) => ele.title.includes(value))
    api(temp)
}

const handleSearchData = (e) => {
    e.preventDefault()

    let value = getValue("searchValue")

    handleSearch(value)

}
const handleInput = (e) => {
    let value = getValue("searchValue")
    handleSearch(value)
    if(e.key=="Enter"){
        let value = getValue("searchValue")
        handleSearch(value)
    }

}

document.getElementById("searchValue").addEventListener("keypress", handleInput)
document.getElementById("searching").addEventListener("submit", handleSearchData)
document.getElementById("LTH").addEventListener("click", () => HandleSort("LTH"))
document.getElementById("HTL").addEventListener("click", () => HandleSort("HTL"))
document.getElementById("men").addEventListener("click", () => handleFilter("men"))
document.getElementById("women").addEventListener("click", () => handleFilter("women"))
document.getElementById("kids").addEventListener("click", () => handleFilter("kids"))
