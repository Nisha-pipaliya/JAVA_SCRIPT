
let shopping = [];

const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    shopping.forEach((ele, index) => { 
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = ele.ProductName;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.Quantity;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.Price;
        let td4 = document.createElement('td'); 
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"; 
        deleteButton.addEventListener("click", () => { 
            deleteProduct(index); 
        });
        td4.appendChild(deleteButton);
        tr.append(td1, td2, td3, td4);
        document.getElementById("tbody").appendChild(tr);
    });
};

const handleShop = (e) => {
    e.preventDefault();
    let data = {
        ProductName: document.getElementById('ProductName').value,
        Quantity: document.getElementById('Quantity').value,
        Price: document.getElementById('Price').value
    };
    shopping.push(data); 
    Display(); 
};

const deleteData = () => {
    document.getElementById('tbody').innerHTML = "";
    shopping = [];
};

const deleteProduct = (index) => {
    shopping.splice(index, 1);
    Display();
};
document.getElementById("ProductData").addEventListener("submit", handleShop); 
document.getElementById("deleteAll").addEventListener("click", deleteData); 