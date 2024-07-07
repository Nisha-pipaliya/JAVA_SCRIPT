
// document.addEventListener('DOMContentLoaded', function () {
//     const buyTableBody = document.querySelector('#buy-table tbody');

//     function loadBoughtBooks() {
//         const buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
//         buyTableBody.innerHTML = '';
//         buyList.forEach(book => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${book.name}</td>
//                 <td>${book.author}</td>
//                 <td>${book.description}</td>
//                 <td>${book.date}</td>
//                 <td>${book.category}</td>
//                 <td>${book.price}</td>
//             `;
//             buyTableBody.appendChild(row);
//         });
//     }

//     loadBoughtBooks();
// });





import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];

const displayBooks = (books) => {
    const tableBody = document.querySelector("#tbody");
    tableBody.innerHTML = ''; 

    books.forEach((book) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td>${book.price}</td>
        `;

        tableBody.appendChild(row);
    });
};

window.onload = () => {
    displayBooks(buyList);
};