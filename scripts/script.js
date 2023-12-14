document.getElementById('search-button').addEventListener('click', function() {
    const inputVal = document.getElementById('location-input').value;
    if (inputVal) {
        fetchProperties(inputVal);
    }
});

function fetchProperties(location) {
    const xhr = new XMLHttpRequest();
    const url = `https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=${encodeURIComponent(location)}&limit=10`;

    xhr.open('GET', url);
    xhr.setRequestHeader('X-RapidAPI-Key', '659b4becdamsh239ae2374af3399p1ed731jsn684b74b455e9');
    xhr.setRequestHeader('X-RapidAPI-Host', 'realtor.p.rapidapi.com');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayResults(data);
            } else {
                console.error('Error in API request');
            }
        }
    };

    xhr.send();
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.autocomplete && data.autocomplete.length > 0) {
        data.autocomplete.forEach(item => {
            const card = createCard(item);
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = 'No results found';
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h4');
    title.textContent = item.city || item.state || item.school || 'Location'; 

    const details = document.createElement('p');
    details.textContent = `Area Type: ${item.area_type}, ID: ${item._id}`; 

    card.appendChild(title);
    card.appendChild(details);

    return card;
}
