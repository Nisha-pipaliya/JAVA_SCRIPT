document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const bookDescription = document.getElementById('book-description').value;
    const addedDate = document.getElementById('added-date').value;
    const bookCategory = document.getElementById('book-category').value;

    const book = {
        name: bookName,
        author: authorName,
        description: bookDescription,
        date: addedDate,
        category: bookCategory
    };

    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    bookList.push(book);
    localStorage.setItem('book-list', JSON.stringify(bookList));

    alert('Book added successfully!');
    this.reset();
});
