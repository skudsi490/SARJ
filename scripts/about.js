let aboutBtn = document.querySelector("#about-btn")
aboutBtn.addEventListener('click', function() {
    window.location.href = "/pages/login.html"

})
userLoggedIn();

function userLoggedIn() {
    const welcomeUserBtn = document.getElementById('about-btn');
    const offerDiv = document.getElementById('make-offer-div');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser && loggedInUser.username) {
        const welcomeLoggedUserMessage = `<p class='welcome-logged-message card-title h4 mb-3'>hello ${loggedInUser.username}!</p>`;
        const logoutButton = `<button class='logout-button filter-button' onclick='handleLogout()'>Logout</button>`;
        const appearOfferDiv = `<button class='logout-button filter-button' onclick="window.location.href = 'contact.html'">make us an offer!</button>`
        offerDiv.innerHTML = `${welcomeLoggedUserMessage} ${appearOfferDiv} ${logoutButton}`
        welcomeUserBtn.style.display = 'none'
    }
}

function handleLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

