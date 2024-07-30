//Question 7: Merge Two Arrays

const mergeArrays=(arr1, arr2)=> {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    
    for (let j = 0; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }
    return mergedArray;
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2));
