const subtract=()=>{

    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = document.getElementById("input3").value;
    let d = document.getElementById("input4").value;

    let result = a - b - c - d;

    document.getElementById("result").innerText = "Result of subtraction: ", result;
}