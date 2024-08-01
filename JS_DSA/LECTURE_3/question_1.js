//Question 1: Find Pairs with Sum Less Than Target 

const findPairsWithSumLessThanTarget=(numbers, target)=> {
    let pairs = [];
    numbers.sort((a, b) => a - b); 
    
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum < target) {
            for (let i = left; i < right; i++) {
                pairs.push([numbers[i], numbers[right]]);
            }
            left++;
        } else 
        {

            right--;
        }
    }
    
    return pairs;
}
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;

console.log(findPairsWithSumLessThanTarget(numbers1, target1));
