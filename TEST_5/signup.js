// form....
let signup=[].JSON.parse(localStorage.getItem(signup)) || {}
    document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let signup =[] 

    const handleData =(e) =>{
        e.preventDefault();
    let Name = document.getElementById('Name').value;
    //img start
    let ImageFile = document.getElementById('Image').files[0];
    //img end
    let Content = document.getElementById('Content').value;
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;


    let profileElement = document.createElement('div');
    profileElement.setAttribute('class', 'profile-details');

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Name: ${Name}`;

    // img saprated
    let imgElement = document.createElement('img');
    let reader = new FileReader();
    reader.onload = function(e) {
        imgElement.src = e.target.result;
    };
    reader.readAsDataURL(ImageFile);
    //img end

    let contentElement = document.createElement('p');
    contentElement.innerHTML = `Content: ${Content}`;

    let passElement = document.createElement('p');
    passElement.innerHTML = `pass: ${pass}`;

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `email: ${email}`;


    let likeButton = document.createElement('button');
    likeButtonButton.textContent = 'like';
    likeButton.addEventListener('click', function() {
        alert('successfully');
    });


    let shareButton = document.createElement('button');
    shareButton.textContent = 'share';
    shareButton.addEventListener('click', function() {
        profileElement.remove();
    });

}


    profileElement.append(nameElement);
    profileElement.append(imgElement);
    profileElement.append(contentElement);
    profileElement.append(emailElement);
    profileElement.append(passElement);
    profileElement.append(likeButton);
    profileElement.append(shareButton);
    

    document.getElementById('profileContainer').append(profileElement);
    document.getElementById('Form').reset();

    document.getElementById("profile-form").addEventListener("submit" ,handleData);

    window.location.href=""
});