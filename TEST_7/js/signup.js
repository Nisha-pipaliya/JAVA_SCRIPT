export function createSignupPage(container) {
    container.innerHTML = `
        <h1>Sign Up</h1>
        <form id="signupForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Sign Up</button>
        </form>
    `;

    const signupForm = container.querySelector('#signupForm');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = signupForm.username.value;
        const password = signupForm.password.value;
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Sign up successful!');
        loadPage('home');
    });
}