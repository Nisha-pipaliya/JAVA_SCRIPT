export function createLoginPage(container) {
    container.innerHTML = `
        <h1>Login</h1>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
    `;

    const loginForm = container.querySelector('#loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === username && user.password === password) {
            alert('Login successful!');
            loadPage('home');
        } else {
            alert('Invalid username or password!');
        }
    });
}