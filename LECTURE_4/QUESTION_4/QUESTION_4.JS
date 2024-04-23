// Find odd or even

// let num=29
let num = process.argv[1];
num = parseInt(num); 

// console.log(num); // Output the value of a

if(num%2==0){
    console.log(" it's an even number  !! ");
}
else{
    console.log("it's an odd number  !!");
}
