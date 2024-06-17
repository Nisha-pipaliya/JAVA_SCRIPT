document.addEventListener('DOMContentLoaded', function() {
    const bookmarkTableBody = document.getElementById('bookmark-table').getElementsByTagName('tbody')[0];
    const bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];

    const displayBookmarks = (books) => {
        const tableRows = books.map(book => `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.date}</td>
                <td>${book.category}</td>
                <td>N/A</td>
            </tr>
        `).join('');

        bookmarkTableBody.innerHTML = tableRows;
    };

    displayBookmarks(bookmarkList);
});