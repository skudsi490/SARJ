document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // קוד לטיפול בהרשמה של המשתמש
        // ...

        // שמירת מספר המשתמשים המחוברים ב-LocalStorage
        const connectedUsers = JSON.parse(localStorage.getItem('connectedUsers')) || [];
        connectedUsers.push({ username: 'newUser' }); // הוספת המשתמש שנרשם
        localStorage.setItem('connectedUsers', JSON.stringify(connectedUsers));

        // העברת המשתמש לדף ההתחברות
        window.location.href = "login.html";
    });
});
