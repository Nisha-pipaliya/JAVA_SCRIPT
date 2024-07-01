export function createNavbar(container, loadPage) {
    container.innerHTML = `
        <img src="images/logo.png" alt="Logo">
        <nav>
           <a href="/index.html" data-page="home">Home</a>
            <a href="/TEST_7/pages/signup.html" data-page="signup">Sign Up</a>
            <a href="/pages/login.html" data-page="login">Login</a>
            <a href="/pages/addplace.html" data-page="addplace">Add Place</a>
        </nav>
    `;

    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.dataset.page;
            loadPage(page);
        });
    });
}