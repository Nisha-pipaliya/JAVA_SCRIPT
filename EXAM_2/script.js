

// timer
const showTime = () => {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if (h==0) {
        h=12;
    }

    if (h >12) {
        h = h- 12;
        session = "PM";
    }
    h = (h<10) ?"0" +h : h;
    m = (m<10) ?"0" + m : m;
    s = (s<10) ?"0" +s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
 
   setTimeout(showTime, 1000);
}

showTime();


// form....

    document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let productName = document.getElementById('productName').value;
    //img start
    let productImageFile = document.getElementById('productImage').files[0];
    //img end
    let productContent = document.getElementById('productContent').value;
    let productPrice = document.getElementById('productPrice').value;



    let productElement = document.createElement('div');
    productElement.setAttribute('class', 'product-details');



    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Name: ${productName}`;

    // img saprated
    let imgElement = document.createElement('img');
    let reader = new FileReader();
    reader.onload = function(e) {
        imgElement.src = e.target.result;
    };
    reader.readAsDataURL(productImageFile);
    //img end


    let contentElement = document.createElement('p');
    contentElement.innerHTML = `Content: ${productContent}`;


    let priceElement = document.createElement('p');
    priceElement.innerHTML = `Price:$${productPrice}`;


    let buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', function() {
        alert('Buy successfully');
    });


    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        productElement.remove();
    });


    productElement.append(nameElement);
    productElement.append(imgElement);
    productElement.append(contentElement);
    productElement.append(priceElement);
    productElement.append(buyButton);
    productElement.append(deleteButton);
    

    document.getElementById('productContainer').append(productElement);
    document.getElementById('productForm').reset();
});