
// document.addEventListener('DOMContentLoaded', function() {
//     const books = JSON.parse(localStorage.getItem('books')) || [];
//     const bookTableBody = document.querySelector('#book-table tbody');
//     const bookCount = document.getElementById('book-count');

//     function displayBooks(bookList) {
//         bookTableBody.innerHTML = '';
//         bookList.forEach(book => {
//             const row = document.createElement('tr');

//             row.innerHTML = `
//                 <td>${book.name}</td>
//                 <td>${book.author}</td>
//                 <td>${book.description}</td>
//                 <td>${book.date}</td>
//                 <td>${book.category}</td>
//                 <td>${book.price}</td>
//                 <td>
//                     <button class="buy-btn">Buy</button>
//                     <button class="bookmark-btn">Bookmark</button>
//                 </td>
//             `;

//             bookTableBody.appendChild(row);
//         });
//         bookCount.textContent = bookList.length;
//     }

//     displayBooks(books);

//     document.querySelector('#category-filter').addEventListener('change', function() {
//         const category = this.value;
//         const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
//         displayBooks(filteredBooks);
//     });

//     bookTableBody.addEventListener('click', function(event) {
//         if (event.target.classList.contains('buy-btn')) {
//             const row = event.target.closest('tr');
//             const book = {
//                 name: row.children[0].textContent,
//                 author: row.children[1].textContent,
//                 description: row.children[2].textContent,
//                 date: row.children[3].textContent,
//                 category: row.children[4].textContent,
//                 price: row.children[5].textContent
//             };

//             let buyList = localStorage.getItem('buy-list');
//             if (!buyList) {
//                 buyList = [];
//             } else {
//                 buyList = JSON.parse(buyList);
//             }
//             buyList.push(book);
//             localStorage.setItem('buy-list', JSON.stringify(buyList));
//         } else if (event.target.classList.contains('bookmark-btn')) {
//             const row = event.target.closest('tr');
//             const book = {
//                 name: row.children[0].textContent,
//                 author: row.children[1].textContent,
//                 description: row.children[2].textContent,
//                 date: row.children[3].textContent,
//                 category: row.children[4].textContent,
//                 price: row.children[5].textContent
//             };

//             let bookmarkList = localStorage.getItem('bookmark-list');
//             if (!bookmarkList) {
//                 bookmarkList = [];
//             } else {
//                 bookmarkList = JSON.parse(bookmarkList);
//             }
//             bookmarkList.push(book);
//             localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
//         }
//     });
// });











import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let books = JSON.parse(localStorage.getItem('book-list')) || [];
let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];

const displayBooks = (filteredBooks) => {
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = ''; 

    filteredBooks.forEach((book, index) => {
        const row = document.createElement('tr');
        console.log(`Displaying book: ${book.name}, Image URL: ${book.imgUrl}`);
        let imageUrl = book.imgUrl ? book.imgUrl : 'default-image-path.jpg';

        row.innerHTML = `
            <td>${book.author}</td>
            <td>${book.name}</td>
            <td>${book.description}</td>
            <td>${book.date}</td>
            <td>${book.category}</td>
            <td><img src="${imageUrl}" alt="${book.name}" width="50"></td>
            <td>${book.price}</td>
            <td><button class="buy-btn" data-index="${index}">Buy</button></td>
            <td><button class="bookmark-btn" data-index="${index}">Add</button></td>
        `;

        tableBody.appendChild(row);
    });

    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', handleBuy);
    });

    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', handleBookmark);
    });
};

const updateTotalBooks = (count) => {
    document.getElementById('totalBooks').textContent = count;
};

const filterBooks = () => {
    const category = document.getElementById('categoryFilter').value;
    if (category === 'all') {
        displayBooks(books);
        updateTotalBooks(books.length);
    } else {
        const filteredBooks = books.filter(book => book.category === category);
        displayBooks(filteredBooks);
        updateTotalBooks(filteredBooks.length);
    }
};

const handleBuy = (event) => {
    const bookIndex = event.target.dataset.index;
    const book = books.splice(bookIndex, 1)[0];
    buyList.push(book);
    localStorage.setItem('buy-list', JSON.stringify(buyList));
    localStorage.setItem('book-list', JSON.stringify(books));
    filterBooks(); 
};

const handleBookmark = (event) => {
    const bookIndex = event.target.dataset.index;
    const book = books.splice(bookIndex, 1)[0];
    bookmarkList.push(book);
    localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
    localStorage.setItem('book-list', JSON.stringify(books));
    filterBooks(); 
};

window.onload = () => {
    document.getElementById('categoryFilter').addEventListener('change', filterBooks);
    displayBooks(books);
    updateTotalBooks(books.length);
};