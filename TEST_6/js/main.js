
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('book-form').addEventListener('submit', function(e) {
//         e.preventDefault();

//         const bookName = document.getElementById('book-name').value;
//         const authorName = document.getElementById('author-name').value;
//         const bookDescription = document.getElementById('book-description').value;
//         const addedDate = document.getElementById('added-date').value;
//         const bookCategory = document.getElementById('book-category').value;
//         const price = Math.floor(Math.random() * 100) + 1;

//         const book = {
//             name: bookName,
//             author: authorName,
//             description: bookDescription,
//             date: addedDate,
//             category: bookCategory,
//             price: price
//         };

//         let books = localStorage.getItem('books');
//         if (!books) {
//             books = [];
//         } else {
//             books = JSON.parse(books);
//         }
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(books));

//         window.location.href = '/TEST_6/pages/dashboard.html';
//     });
// });









import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let books = JSON.parse(localStorage.getItem('book-list')) || [];

const handleData = (e) => {
    e.preventDefault();
    let book = {
        author: document.getElementById("Book_NameAuthor").value,
        name: document.getElementById("NameBook").value,
        description: document.getElementById("DescriptionAdded").value,
        date: document.getElementById("DateBook").value,
        category: document.getElementById("Category").value,
        imgUrl: document.getElementById("ImgURL").value,
        price: document.getElementById("Price").value
    };
    books.push(book);
    localStorage.setItem("book-list", JSON.stringify(books));
    document.getElementById("bookForm").reset();
    alert('Book added successfully!');
};

window.onload = () => {
    document.getElementById("bookForm").addEventListener("submit", handleData);
};