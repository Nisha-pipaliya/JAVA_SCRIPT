const printNumbersWithModulo=()=> {
    let num =parseInt(document.getElementById("numberInput").value);
    let K =parseInt(document.getElementById("kInput").value);

    if ( K === 0) {
        alert("Please enter valid numbers. K should not be zero.");
        return;
    }
    for (let i = 1; i <= num; i++) {
        if (i % K === 0) {
         console.log(i);
        }
    }
}
