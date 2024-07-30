//Question 5: Count Occurrences of an Element

const countOccurrences=(arr, target)=> {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}
const arr = [1, 2, 2, 3, 2, 4, 5];
const target = 2;
console.log(countOccurrences(arr, target)); 
