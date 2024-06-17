

document.addEventListener('DOMContentLoaded', function() {
    const myBooksTableBody = document.getElementById('mybooks-table').getElementsByTagName('tbody')[0];
    const buyList = JSON.parse(localStorage.getItem('buy-list')) || [];

    function displayMyBooks(books) {
        let tableRows = books.map(book => `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.date}</td>
                <td>${book.category}</td>
                <td>N/A</td>
            </tr>
        `).join('');

        myBooksTableBody.innerHTML = tableRows;
    }

    displayMyBooks(buyList);
});
