// Question 9: Check if Array is Sorted


const isArraySorted=(arr)=> {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 2, 4, 5];

console.log(isArraySorted(array1));  
console.log(isArraySorted(array2));  