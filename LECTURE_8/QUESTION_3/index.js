const printNumbersMinToMax=()=> {
  
    let min = document.getElementById("minInput").value;
    let max = document.getElementById("maxInput").value;

    if (min >= max) {
        alert("Please enter valid numbers.");
        return;
    }
    for (let i = min; i < max; i++) {
        console.log(i);
    }
   
}
