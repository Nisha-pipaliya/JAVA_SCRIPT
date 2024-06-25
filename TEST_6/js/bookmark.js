document.addEventListener('DOMContentLoaded', function () {
    const bookmarkTableBody = document.querySelector('#bookmark-table tbody');

    function loadBookmarkedBooks() {
        const bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
        bookmarkTableBody.innerHTML = '';
        bookmarkList.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.addedDate}</td>
                <td>${book.category}</td>
                <td>${book.price}</td>
            `;
            bookmarkTableBody.appendChild(row);
        });
    }

    loadBookmarkedBooks();
});
