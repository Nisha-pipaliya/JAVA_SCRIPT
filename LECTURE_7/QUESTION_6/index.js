const manipulateVariable=()=> {
    var number = document.getElementById("numberInput").value;
    document.getElementById("output").innerText = "Initial value of number: " + number;
    
    number = 20;
    document.getElementById("output").innerText += "\nValue of number after reassignment: " + number;
}
