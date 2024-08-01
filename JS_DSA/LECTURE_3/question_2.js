// Question 2: Count Pairs with Sum Less Than Target

const countPairsWithSumLessThanTarget=(numbers, target)=> {
    numbers.sort((a, b) => a - b); 
    let count = 0;
    
    for (let left = 0; left < numbers.length - 1; left++) {
        let right = numbers.length - 1;
        
        while (left < right) {
            let sum = numbers[left] + numbers[right];
            
            if (sum < target) {
                count += (right - left);
                break; 
            } else {
                right--;
            }
        }
    }
    
    return count;
}
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;
console.log(countPairsWithSumLessThanTarget(numbers1, target1)); 
