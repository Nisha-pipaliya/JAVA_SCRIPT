//Question 4: Reverse an Array

const reverseArray=(array)=>{
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
let result = reverseArray([1, 2, 3, 4, 5]);
console.log("Reversed array:", result); 

// SECOND TYPE

let array=[1, 2, 3, 4, 5]
for(let i = array.length; i >= 1; i--){
    console.log(i);
}
