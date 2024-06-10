let News = JSON.parse(localStorage.getItem('News')) || [];

const uiMaker = (data) => {
    const NewsContainer = document.getElementById("News");
    NewsContainer.innerHTML = "";

    data.forEach((ele, index) => {
        let div = document.createElement('div');
        div.className = 'news-card';

        let img = document.createElement('img');
        img.src = ele.img;

        let title = document.createElement('h4');
        title.innerHTML = ele.title;

        let country = document.createElement('h6');
        country.innerHTML = ele.country;
        
        let description = document.createElement('p');
        description.innerHTML = `Description: ${ele.description}`;

        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        let likeButton = document.createElement('button');
        likeButton.className = 'like';
        likeButton.innerHTML = `Like (${ele.likes || 0})`;
        likeButton.addEventListener('click', () => handleLike(index));

        let shareButton = document.createElement('button');
        shareButton.className = 'share';
        shareButton.innerHTML = `Share`;
        shareButton.addEventListener('click', () => handleShare(index));
        
        buttonContainer.append(likeButton, shareButton);
        div.append(img, title, country, description, buttonContainer);
        NewsContainer.append(div);
    });
};
// yeh section like ko handle karta hain 
const handleLike = (index) => {
    //yeh like ko count badhayega 
    News[index].likes = (News[index].likes || 0) + 1;
     // iska matlab ki update hui news isme store hoga 
    localStorage.setItem("News", JSON.stringify(News));
    uiMaker(News);
};


// upr ki tarah same work karega 
const handleShare = (index) => {
    alert('News shared successfully!');
};

const handleLinkClick = (index) => {
    News[index].clicks = (News[index].clicks || 0) + 1;
    localStorage.setItem("News", JSON.stringify(News));
    uiMaker(News);
};

uiMaker(News);




// -------------------------------------------------------------------------------------------login page ke liye


// script ko execute honi dege puri tarah 
document.addEventListener("DOMContentLoaded", function() {

   // local storage mese login item ko check karga toh user login karega ? yeh chhek karega 
    let loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn) {
        let user = JSON.parse(localStorage.getItem("user"));
        displayUserInfo(user);
    }

    document.getElementById("logout-btn").addEventListener("click", function() {
        // item ko remove karne ke liye application mese karna padega isiliye hai ye
        localStorage.removeItem("loggedIn");
        window.location.href = "./login.html";
    });
});

function displayUserInfo(user) {
    let userImg = document.getElementById("userimg");
    userImg.src = user.imgUrl;
    userImg.alt = "User Image";

    let Div = document.getElementById("info");

    let userName = document.createElement("p");
    userName.textContent = "Full Name: " + user.fullName;

    let userEmail = document.createElement("p");
    userEmail.textContent = "Email: " + user.email;

    let userCountry = document.createElement("p");
    userCountry.textContent = "Country: " + user.country;

    Div.append(userName);
    Div.append(userEmail);
    Div.append(userCountry);
}
