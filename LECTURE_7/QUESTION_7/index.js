const multiplyBy50=()=>{

    let number = parseInt(document.getElementById("numberInput").value);

    let result = number * 50;

    document.getElementById("result").innerText = result;
}