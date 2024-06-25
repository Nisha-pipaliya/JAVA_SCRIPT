
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const bookDescription = document.getElementById('book-description').value;
    const addedDate = document.getElementById('added-date').value;
    const bookCategory = document.getElementById('book-category').value;
    const price = Math.floor(Math.random() * 100) + 1; 

    const book = {
        name: bookName,
        author: authorName,
        description: bookDescription,
        date: addedDate,
        category: bookCategory,
        price: price
    };

    
    let books = localStorage.getItem('books');
    if (!books) {
        books = [];
    } else {
        books = JSON.parse(books);
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

   
    window.location.href = 'TEST_6/pages/dashboard.html';
});
