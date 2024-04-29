
//ARRAY TO LOWERCASE at alternative postion
let arr = ["RED", "AND", "WHITE"];
let lowercaseArray = [];
  
for (let i = 0; i < arr.length; i++) 
{
    let array = arr[i];
    if (array !== "RED" && array !== "WHITE")
     {
        array = array.toLowerCase();
    }
    console.log(array);
}