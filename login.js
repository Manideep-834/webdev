document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('man').value;
    const password = document.getElementById('pass').value;

    const users = {
        'mani': {
            'username': 'mani',
            'password': '123456'
        }
    };

    if (users[username] && users[username].password === password) {
        // Store user information in local storage
        localStorage.setItem('currentUser', JSON.stringify(users[username]));
        alert('Login successful!');
        // Redirect or perform any other action as needed
    } else {
        alert('Login failed. Please check your credentials.');
    }
});