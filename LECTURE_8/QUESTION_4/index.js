
const printNum=()=> {
    var num = parseInt(document.getElementById("numberInput").value);

    if ( num <= 0) {
        alert(" Enter a valid number.");
        return;
    }
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
