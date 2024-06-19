document.addEventListener('DOMContentLoaded', function() {
    const bookTable = document.getElementById('book-table').getElementsByTagName('tbody')[0];
    const filterCategory = document.getElementById('filter-category');
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

    const displayBooks=(books) =>{
        bookTable.innerHTML = '';
        books.forEach((book, index) => {
            const row = bookTable.insertRow();
            row.insertCell(0).textContent = book.name;
            row.insertCell(1).textContent = book.author;
            row.insertCell(2).textContent = book.description;
            row.insertCell(3).textContent = book.date;
            row.insertCell(4).textContent = book.category;
            row.insertCell(5).textContent = 'N/A'; 
            const buyCell = row.insertCell(6);
            buyCell.innerHTML = `<button onclick="buyBook(${index})">Buy</button>`;
            const bookmarkCell = row.insertCell(7);
            bookmarkCell.innerHTML = `<button onclick="bookmarkBook(${index})">Add</button>`;
        });
    }

    const buyBook=(index) =>{
        let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
        const book = bookList.splice(index, 1)[0];
        localStorage.setItem('book-list', JSON.stringify(bookList));

        let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
        buyList.push(book);
        localStorage.setItem('buy-list', JSON.stringify(buyList));

        displayBooks(bookList);
    }

const bookmarkBook=(index) =>{
        let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
        const book = bookList.splice(index, 1)[0];
        localStorage.setItem('book-list', JSON.stringify(bookList));

        let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
        bookmarkList.push(book);
        localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));

        displayBooks(bookList);
    }

    filterCategory.addEventListener('change', function() {
        const category = this.value;
        const filteredBooks = category ? bookList.filter(book => book.category == category) : bookList;
        displayBooks(filteredBooks);
    });

    displayBooks(bookList);
});
