const getData = async () => {
    try {
        let req = await fetch("https://fakestoreapi.com/products");
        let res = await req.json();
        console.log(res);
        Display(res);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const Display = (products) => {
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        let div = document.createElement('div');
        div.classList.add('product');

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title; 

        let title = document.createElement("h5");
        title.textContent = product.title;

        let description = document.createElement("p");
        description.textContent = product.description;

        let price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        div.append(img, title, description, price);
        dataContainer.append(div);
    });
}

getData();
