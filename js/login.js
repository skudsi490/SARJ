document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // קוד לטיפול בהתחברות של המשתמש
        // ...

        // שמירת מספר המשתמשים המחוברים ב-LocalStorage
        const connectedUsers = JSON.parse(localStorage.getItem('connectedUsers')) || [];
        connectedUsers.push({ username: 'loggedInUser' }); // הוספת המשתמש שנכנס
        localStorage.setItem('connectedUsers', JSON.stringify(connectedUsers));

        // העברת המשתמש לדף Dashboard
        window.location.href = "login.html";
    });
});
