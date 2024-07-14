let userdetails = JSON.parse(localStorage.getItem("user"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/TEST_7/pages/login.html";
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar()
}

let places = [
    {
        title: "Mount Everest",
        cost: 5000,
        img: ["mount-everest-1.jpg", "mount-everest-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "The highest peak in the world, located in the Himalayas."
    },
    {
        title: "Grand Canyon",
        cost: 300,
        img: ["grand-canyon-1.jpg", "grand-canyon-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "A steep-sided canyon carved by the Colorado River in Arizona."
    },
    {
        title: "Eiffel Tower",
        cost: 200,
        img: ["eiffel-tower-1.jpg", "eiffel-tower-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic iron lattice tower located on the Champ de Mars in Paris."
    },
    {
        title: "Machu Picchu",
        cost: 1000,
        img: ["machu-picchu-1.jpg", "machu-picchu-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient Incan city in the Andes mountains of Peru."
    },
    {
        title: "Santorini",
        cost: 800,
        img: ["santorini-1.jpg", "santorini-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Volcanic island in the Aegean Sea, known for its stunning sunsets and white-washed buildings."
    },
    {
        title: "Sydney Opera House",
        cost: 300,
        img: ["sydney-opera-house-1.jpg", "sydney-opera-house-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic performing arts center in Sydney, Australia."
    },
    {
        title: "Great Wall of China",
        cost: 1200,
        img: ["great-wall-1.jpg", "great-wall-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient wall in China, stretching over 13,000 miles and built to protect against invasions."
    },
    {
        title: "Taj Mahal",
        cost: 500,
        img: ["taj-mahal-1.jpg", "taj-mahal-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife."
    },
    {
        title: "Mediterranean Coast",
        cost: 1000,
        img: ["mediterranean-coast-1.jpg", "mediterranean-coast-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Picturesque coastline along the Mediterranean Sea, known for its beaches and cultural sites."
    },
    {
        title: "The Colosseum",
        cost: 400,
        img: ["colosseum-1.jpg", "colosseum-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient Roman amphitheater in Rome, Italy, known for gladiatorial contests and public spectacles."
    },
    {
        title: "Niagara Falls",
        cost: 400,
        img: ["niagara-falls-1.jpg", "niagara-falls-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Famous waterfall on the border of Canada and the United States."
    },
    {
        title: "Petra",
        cost: 700,
        img: ["petra-1.jpg", "petra-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient city carved into cliffs in Jordan, famous for its rock-cut architecture."
    },
    {
        title: "Great Barrier Reef",
        cost: 1500,
        img: ["great-barrier-reef-1.jpg", "great-barrier-reef-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "World's largest coral reef system off the coast of Australia, rich in marine biodiversity."
    },
    {
        title: "Victoria Falls",
        cost: 600,
        img: ["victoria-falls-1.jpg", "victoria-falls-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Waterfall on the Zambezi River in Africa, known for its width and volume."
    },
    {
        title: "Banff National Park",
        cost: 400,
        img: ["banff-national-park-1.jpg", "banff-national-park-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Canadian national park located in the Rocky Mountains, known for its stunning landscapes and wildlife."
    },
    {
        title: "Tokyo Tower",
        cost: 250,
        img: ["tokyo-tower-1.jpg", "tokyo-tower-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Iconic communications and observation tower in Tokyo, Japan."
    },
    {
        title: "Pyramids of Giza",
        cost: 600,
        img: ["pyramids-of-giza-1.jpg", "pyramids-of-giza-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Ancient pyramid complex in Egypt, one of the Seven Wonders of the Ancient World."
    },
    {
        title: "Yellowstone National Park",
        cost: 300,
        img: ["yellowstone-national-park-1.jpg", "yellowstone-national-park-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "National park in the United States, known for its geothermal features and wildlife."
    },
    {
        title: "Serengeti National Park",
        cost: 800,
        img: ["serengeti-national-park-1.jpg", "serengeti-national-park-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Tanzanian national park known for its annual migration of wildebeest and other wildlife."
    },
    {
        title: "Antelope Canyon",
        cost: 400,
        img: ["antelope-canyon-1.jpg", "antelope-canyon-2.jpg"],
        likes: 0,
        comments: [],
        shares: 0 ,
        description: "Slot canyon in Arizona, famous for its wave-like structure and light beams."
    }
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

// Search 
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