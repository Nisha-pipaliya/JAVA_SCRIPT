// Question 3: Find the Largest Number Less Than Target


const findLargestNumberLessThanTarget=(numbers, target)=> {
    let largest = null; 
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < target) {
            largest = numbers[i];
        } else {
            break; 
        }
    }
    
    return largest;
}
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 4;
console.log(findLargestNumberLessThanTarget(numbers1, target1)); 
