
// document.addEventListener('DOMContentLoaded', function () {
//     const bookmarkTableBody = document.querySelector('#bookmark-table tbody');

//     function loadBookmarkedBooks() {
//         const bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
//         bookmarkTableBody.innerHTML = '';
//         bookmarkList.forEach(book => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${book.name}</td>
//                 <td>${book.author}</td>
//                 <td>${book.description}</td>
//                 <td>${book.date}</td>
//                 <td>${book.category}</td>
//                 <td>${book.price}</td>
//             `;
//             bookmarkTableBody.appendChild(row);
//         });
//     }

//     loadBookmarkedBooks();
// });









import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let books = JSON.parse(localStorage.getItem('bookmark-list')) || [];
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
            <td>${book.price ? book.price : 'N/A'}</td>
        `;

        tableBody.appendChild(row);
    });
};

window.onload = () => {
    displayBooks(bookmarkList);
};