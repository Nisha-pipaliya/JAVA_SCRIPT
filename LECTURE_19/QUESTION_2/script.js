// try & catch 
const divide =(a,b)=>{
    if (a==0) {
        throw new error("A invalid")
    }
    if (b==0) {
        throw new error("B invalid");
    }
    return a/b;
}
// console.log(divide(25,12));

console.log("start of try catch");

try{
    console.log(divide(10,0));
}
catch{
    console.log("error:" + error);
}
console.log("end of try catch");