const sum=()=>{

    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    let c = parseInt(document.getElementById("input3").value);

    let result = a + b + c;

    document.getElementById("result").innerText = "Sum of the given numbers : " + result;
}