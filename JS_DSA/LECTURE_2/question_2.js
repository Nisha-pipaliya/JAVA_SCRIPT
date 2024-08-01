// Question 2 : Remove Duplicates from Sorted Array

const removeDuplicates=(arr)=> {
    if (arr.length === 0)
         return [0, arr];
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            newArr.push(arr[i]);
        }
    }
    return [uniqueArr.length, uniqueArr];
}
const input_Array = [1, 1, 2];
const [length, newArr] = removeDuplicates(input_Array);
console.log(`Length: ${length}`);
console.log(`Array: ${newArr}`); 


