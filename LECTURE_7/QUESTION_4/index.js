const printNameAndAge = () => {

    let name = document.getElementById("nameInput").value;
    let age = parseInt(document.getElementById("ageInput").value);


    document.getElementById("output").innerHTML = "Name: " + name + "<br>Type of Name: " + typeof name + "<br>Age: " + age + "<br>Type of Age: " + typeof age;
}