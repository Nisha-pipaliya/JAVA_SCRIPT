
const calculateSum=()=> {
    let num = parseInt(document.getElementById("Number").value);
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        console.log(i);
      
    }
    document.getElementById("result").innerHTML = "Sum of even numbers up to " + num + " is: " + sum;   
}
// document.write(i)