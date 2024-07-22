document.addEventListener("DOMContentLoaded", function() {
    // let userdetails = JSON.parse(localStorage.getItem("user"));
    // let isLogin = localStorage.getItem("isLogin") || false;
    // if (!isLogin) {
    //     window.location.href = "/pages/login.html";
    // }

    let places = JSON.parse(localStorage.getItem("places")) || [];

        const handlePlacesData = (data) => {
        let placeList = document.getElementById("placeList");
        placeList.innerHTML = "";

        data.forEach((place) => {
            let div = document.createElement("div");
            div.classList.add("card");

            let img = document.createElement("img");
            img.src = place.img;
            img.alt = place.title;
            img.classList.add("img-fluid");

            let contentDiv = document.createElement("div");
            contentDiv.classList.add("card-content");

            let title = document.createElement("h3");
            title.textContent = place.title;

            let cost = document.createElement("p");
            cost.textContent = `Cost: $${place.cost}`;

            let description = document.createElement("p");
            description.textContent = place.description;

            let actionsDiv = document.createElement("div");
            actionsDiv.classList.add("card-actions");

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

            actionsDiv.append(likeBtn, shareBtn, commentBtn);
            contentDiv.append(title, cost, description);
            div.append(img, contentDiv, actionsDiv);
            placeList.appendChild(div);
        });
    };

});

//     const handleLike = (place) => {
//         place.likes++;
//         localStorage.setItem("places", JSON.stringify(places));  
//         handlePlacesData(sortPlaces(places));
//     };

//     const handleShare = (place) => {
//         place.shares++;
//         localStorage.setItem("places", JSON.stringify(places));  
//         handlePlacesData(sortPlaces(places));
//     };

//     const handleComment = (place) => {
//         place.comments.push(prompt("Enter your comment:"));  
//         localStorage.setItem("places", JSON.stringify(places)); 
//         handlePlacesData(places);
//     };

//     const sortPlaces = (data, orderBy) => {
//         switch (orderBy) {
//             case "LTH":
//                 return data.slice().sort((a, b) => a.cost - b.cost);
//             case "HTL":
//                 return data.slice().sort((a, b) => b.cost - a.cost);
//             case "like":
//                 return data.slice().sort((a, b) => b.likes - a.likes);
//             case "share":
//                 return data.slice().sort((a, b) => b.shares - a.shares);
//             default:
//                 return data;
//         }
//     };

//     document.getElementById("LTH").addEventListener("click", () => handlePlacesData(sortPlaces(places, "LTH")));
//     document.getElementById("HTL").addEventListener("click", () => handlePlacesData(sortPlaces(places, "HTL")));
//     document.getElementById("like").addEventListener("click", () => handlePlacesData(sortPlaces(places, "like")));
//     document.getElementById("share").addEventListener("click", () => handlePlacesData(sortPlaces(places, "share")));

//     handlePlacesData(places);

//     // --------Search 
//     const handleSearch = (value) => {
//         let temp = places.filter((place) => place.title.toLowerCase().includes(value.toLowerCase()));
//         handlePlacesData(temp);
//     };

//     const handleSearchData = (e) => {
//         e.preventDefault();
//         let value = document.getElementById("searchValue").value.trim();
//         handleSearch(value);
//     };

//     const handleInput = (e) => {
//         let value = e.target.value.trim();
//         if (value !== "") {
//             handleSearch(value);
//         } else {
//             handlePlacesData(places);
//         }
//     };

//     document.getElementById("searchValue").addEventListener("input", handleInput);
//     document.getElementById("searching").addEventListener("submit", handleSearchData);
// });
