document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can enhance this as needed)
    if (username && password) {
        // Redirect to main application page
        window.location.href = 'app.html'; // Update this to the URL of your main application
    } else {
        alert('Please fill in both fields.');
    }
});

