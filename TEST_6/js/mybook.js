document.addEventListener('DOMContentLoaded', function () {
    const buyTableBody = document.querySelector('#buy-table tbody');

    function loadBoughtBooks() {
        const buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
        buyTableBody.innerHTML = '';
        buyList.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.date}</td>
                <td>${book.category}</td>
                <td>${book.price}</td>
            `;
            buyTableBody.appendChild(row);
        });
    }

    loadBoughtBooks();
});
