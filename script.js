document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login process (replace with actual API call)
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect or show success message
    alert('Login successful!');
});
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login process (replace with actual API call)
    console.log('Username:', username);
    console.log('Password:', password);

    // Display success message
    const loginContainer = document.querySelector('.login-container');
    loginContainer.innerHTML = `
        <h2>Success!</h2>
        <p>You have successfully logged in.</p>
        <button onclick="location.reload()">Log Out</button>
    `;
});