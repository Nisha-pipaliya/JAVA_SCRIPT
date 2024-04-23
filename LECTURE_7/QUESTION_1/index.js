const calculateProduct=()=>{

    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    let four = document.getElementById("four").value;
    let five = document.getElementById("five").value;


    let product = one * two * three * four * five;

    document.getElementById("result").innerHTML = "The product of " + one + ", " + two + ", " + three + ", " + four + ", and " + five + " is: " + product;
}