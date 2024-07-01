import navbar from "../components/navbar.js";

let userdetails = JSON.parse(localStorage.getItem("user"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/TEST_7/pages/login.html";
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar();
}

let places = [
    // Add your place data here
];

const handlePlacesData = (data) => {
    let placeList = document.getElementById("placeList");
    placeList.innerHTML = "";

    data.map((place) => {
        let div = document.createElement("div");
        div.classList.add("place-item", "col-md-4", "mb-4");

        let img = document.createElement("img");
        img.src = place.img[0];
        img.alt = place.title;
        img.classList.add("img-fluid");

        let title = document.createElement("h3");
        title.textContent = place.title;

        let cost = document.createElement("p");
        cost.textContent = `Cost: $${place.cost}`;

        let description = document.createElement("p");
        description.textContent = place.description;

        let likeBtn = document.createElement("button");
        likeBtn.textContent = `Like (${place.likes})`;
        likeBtn.classList.add("btn", "btn-outline-primary", "me-2");
        likeBtn.addEventListener("click", () => handleLike(place));

        let shareBtn = document.createElement("button");
        shareBtn.textContent = `Share (${place.shares})`;
        shareBtn.classList.add("btn", "btn-outline-secondary", "me-2");
        shareBtn.addEventListener("click", () => handleShare(place));

        let commentBtn = document.createElement("button");
        commentBtn.textContent = `Comment (${place.comments})`;
        commentBtn.classList.add("btn", "btn-outline-info", "me-2");
        commentBtn.addEventListener("click", () => handleComment(place));

        div.append(img, title, cost, description, likeBtn, shareBtn, commentBtn);
        placeList.appendChild(div);
    });
};

const handleLike = (place) => {
    place.likes++;
    handlePlacesData(sortPlaces(places));
};

const handleShare = (place) => {
    place.shares++;
    handlePlacesData(sortPlaces(places));
};

const handleComment = (place) => {
    place.comments++;
    handlePlacesData(places);
};

const sortPlaces = (data, orderBy) => {
    switch (orderBy) {
        case "LTH":
            return data.slice().sort((a, b) => a.cost - b.cost);
        case "HTL":
            return data.slice().sort((a, b) => b.cost - a.cost);
        case "like":
            return data.slice().sort((a, b) => b.likes - a.likes);
        case "share":
            return data.slice().sort((a, b) => b.shares - a.shares);
        default:
            return data;
    }
};

const filterPlaces = (data, category) => {
    return data.filter(place => place.category === category);
};

document.getElementById("LTH").addEventListener("click", () => handlePlacesData(sortPlaces(places, "LTH")));
document.getElementById("HTL").addEventListener("click", () => handlePlacesData(sortPlaces(places, "HTL")));
document.getElementById("like").addEventListener("click", () => handlePlacesData(sortPlaces(places, "like")));
document.getElementById("share").addEventListener("click", () => handlePlacesData(sortPlaces(places, "share")));

handlePlacesData(places);

// Search functionality
const handleSearch = (value) => {
    let temp = places.filter((place) => place.title.toLowerCase().includes(value.toLowerCase()));
    handlePlacesData(temp);
};

const handleSearchData = (e) => {
    e.preventDefault();
    let value = document.getElementById("searchValue").value.trim();
    handleSearch(value);
};

const handleInput = (e) => {
    let value = e.target.value.trim();
    if (value !== "") {
        handleSearch(value);
    } else {
        handlePlacesData(places);
    }
};

document.getElementById("searchValue").addEventListener("input", handleInput);
document.getElementById("searching").addEventListener("submit", handleSearchData);

document.getElementById("navbar").innerHTML = navbar();
