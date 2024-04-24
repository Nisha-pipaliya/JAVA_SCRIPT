const printName=()=>{
    let num = parseInt(document.getElementById("Input").value);
    let Result = document.getElementById("output");

    for (let i = 0; i < num; i++) {
        Result.innerHTML += "RED and WHITE <br>";
    }
}