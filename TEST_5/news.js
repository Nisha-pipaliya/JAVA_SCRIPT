let news =[]

const handleData =(e)=>{
    e.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;


    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Name: ${title}`;

    let contentElement = document.createElement('p');
    contentElement.innerHTML = `Content: ${description}`;

    
    nameElement.append(nameElement);
    contentElement.append(descriptionElement);

    news.push(data)


}
document.getElementById("news-form").addEventListener("submit" ,handleData);