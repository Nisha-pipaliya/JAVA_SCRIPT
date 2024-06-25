// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookTableBody = document.querySelector('#book-table tbody');
    const bookCount = document.getElementById('book-count');

    books.forEach(book => {
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

    bookCount.textContent = books.length;

    document.querySelector('#category-filter').addEventListener('change', function() {
        const category = this.value;
        bookTableBody.innerHTML = '';

        const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
        
        filteredBooks.forEach(book => {
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

        bookCount.textContent = filteredBooks.length;
    });
});
