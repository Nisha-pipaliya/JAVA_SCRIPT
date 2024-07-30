// Question 8: Rotate Array

const rotateArray=(arr, positions)=> {
    let length = arr.length;
    let rotatedArray = new Array(length);
    for (let i = 0; i < length; i++) {
        let newIndex = (i + positions) % length;
        rotatedArray[newIndex] = arr[i];
    }
    
    return rotatedArray;
}
const array = [1, 2, 3, 4, 5];
const positions = 2;
console.log(rotateArray(array, positions));
