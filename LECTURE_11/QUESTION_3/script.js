
// Minimum in array
var arr = [2, 3, 4, 5, 6, 9, 10, 3];
var min = arr[0]; 

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]; 
    }
}
console.log("Minimum value:", min);
