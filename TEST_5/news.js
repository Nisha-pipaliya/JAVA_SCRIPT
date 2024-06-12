let News = JSON.parse(localStorage.getItem('News')) || [];

const handleData = (e) => {
    e.preventDefault();
    let news = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        description: document.getElementById("description").value,
        country: document.getElementById("country").value,
        likes: 0,
        clicks: 0
    };
    News.push(news);
    localStorage.setItem("News", JSON.stringify(News));
    document.getElementById("form").reset();
    alert('News added successfully!');
  window.location.href="index.html"
}

document.getElementById("form").addEventListener("submit", handleData);