// Question 1: Pair with Given Sum

const PairWithSum=(arr)=> {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i,j]; 
            }
        }
    }
    return [-1,-1];
}
const arr = [1, 2, 3, 4, 5];
const target = 9;
console.log(PairWithSum(arr, target)); 
