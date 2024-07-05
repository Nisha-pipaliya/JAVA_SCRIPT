document.addEventListener('DOMContentLoaded', function() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookTableBody = document.querySelector('#book-table tbody');
    const bookCount = document.getElementById('book-count');

    function displayBooks(bookList) {
        bookTableBody.innerHTML = '';
        bookList.forEach(book => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.date}</td>
                <td>${book.category}</td>
                <td>${book.price}</td>
                <td><button class="buy-btn">Buy</button></td>
                <td><button class="bookmark-btn">Bookmark</button></td>
            `;

            bookTableBody.appendChild(row);
        });
        bookCount.textContent = bookList.length;
    }

    displayBooks(books);

    document.querySelector('#category-filter').addEventListener('change', function() {
        const category = this.value;
        const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
        displayBooks(filteredBooks);
    });

    bookTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('buy-btn')) {
            const row = event.target.closest('tr');
            const book = {
                name: row.children[0].textContent,
                author: row.children[1].textContent,
                description: row.children[2].textContent,
                date: row.children[3].textContent,
                category: row.children[4].textContent,
                price: row.children[5].textContent
            };

            let buyList = localStorage.getItem('buy-list');
            if (!buyList) {
                buyList = [];
            } else {
                buyList = JSON.parse(buyList);
            }
            buyList.push(book);
            localStorage.setItem('buy-list', JSON.stringify(buyList));
        } else if (event.target.classList.contains('bookmark-btn')) {
            const row = event.target.closest('tr');
            const book = {
                name: row.children[0].textContent,
                author: row.children[1].textContent,
                description: row.children[2].textContent,
                date: row.children[3].textContent,
                category: row.children[4].textContent,
                price: row.children[5].textContent
            };

            let bookmarkList = localStorage.getItem('bookmark-list');
            if (!bookmarkList) {
                bookmarkList = [];
            } else {
                bookmarkList = JSON.parse(bookmarkList);
            }
            bookmarkList.push(book);
            localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
        }
    });
});
