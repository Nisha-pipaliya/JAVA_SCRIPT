
const calculateSum=()=> {
    let num = parseInt(document.getElementById("Number").value);
    let sum = 0;
    for (let i = 1; i <= num; i++)
     {
        if(i%2==0){
        sum += i;
        console.log(i);
    }  
    }
    document.getElementById("result").innerHTML = "Sum of even numbers up to " + num + " is: " + sum;   
}
