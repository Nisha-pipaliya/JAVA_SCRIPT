export function createAddPlacePage(container) {
    container.innerHTML = `
        <h1>Add Place</h1>
        <form id="addPlaceForm">
            <label for="placeName">Place Name:</label>
            <input type="text" id="placeName" name="placeName" required>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <button type="submit">Add Place</button>
        </form>
        <div id="placesList"></div>
    `;

    const addPlaceForm = container.querySelector('#addPlaceForm');
    const placesList = container.querySelector('#placesList');

    addPlaceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const placeName = addPlaceForm.placeName.value;
        const description = addPlaceForm.description.value;
        const places = JSON.parse(localStorage.getItem('places')) || [];
        places.push({ placeName, description });
        localStorage.setItem('places', JSON.stringify(places));
        addPlaceForm.reset();
        displayPlaces(placesList);
    });

    displayPlaces(placesList);
}

function displayPlaces(container) {
    const places = JSON.parse(localStorage.getItem('places')) || [];
    container.innerHTML = '<h2>Places List</h2>';
    places.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.innerHTML = `<h3>${place.placeName}</h3><p>${place.description}</p>`;
        container.appendChild(placeDiv);
    });
}