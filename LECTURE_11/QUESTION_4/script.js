// Print  the array
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        console.log(arr[i] + ",");
    } else {
        console.log(arr[i]);
    }
}
