
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: 'qwerty' }
];

document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'login-form') {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login successful!');

            localStorage.setItem('user', JSON.stringify(user));
        } else {
            alert('Invalid credentials');
        }
    }
});


function isLoggedIn() {
    return localStorage.getItem('user') !== null;
}

function logout() {
    localStorage.removeItem('user');
}