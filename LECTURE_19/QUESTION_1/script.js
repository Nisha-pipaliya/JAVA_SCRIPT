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
console.log(divide(25,12));

