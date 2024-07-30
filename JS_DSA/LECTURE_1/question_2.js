//Question 2: Find the Largest Element


const findLargestElement=(array) =>{
    let largest = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    
    return largest;
}
let result = findLargestElement([3, 7, 1, 9, 2]);
console.log("Largest element:", result);  
