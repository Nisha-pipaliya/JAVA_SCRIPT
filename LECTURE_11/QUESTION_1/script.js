
//ARRAY TO LOWERCASE at alternative postion
let arr= ["RED", "AND", "WHITE"];
for (let i = 0; i < arr.length; i++) {
    if (i%2==0) {
        console.log(arr[i]);
    } else {
        console.log(arr[i].toLowerCase());
    }
}
