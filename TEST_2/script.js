

// timer

let hour = 0;
    let minute = 1;
    let second = 59;

    let id = setInterval(() => {
        document.getElementById('hour').innerText = hour < 10 ? '0' + hour : hour;
        document.getElementById('minute').innerText = minute < 10 ? '0' + minute : minute;
        document.getElementById('second').innerText = second < 10 ? '0' + second : second;

        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(id);
        }
        if (second === 0) {
            if (minute === 0) {
                hour--;
                minute = 59;
            } else {
                minute--;
            }
            second = 59;
        } else {
            second--;
        }
    }, 1000);


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