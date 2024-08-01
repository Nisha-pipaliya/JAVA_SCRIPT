// Question : 5 :Valid Palindrome


// const isPalindrome=(str) =>{
//     let cleanedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
//             cleanedStr += char.toLowerCase();
//         }
//     }
//     const length = cleanedStr.length;
//     for (let i = 0; i < length / 2; i++) {
//         if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
//             return false; 
//         }
//     }

//     return true;
// }
// const input = 'A man, a plan, a canal: Panama';
// console.log(isPalindrome(input)); 


const Palindrome=(str)=> {
      let left = 0;
      let right = str.length - 1;

    while (left < right) {
        while (left < right && !((str[left] >= 'a' && str[left] <= 'z') || 
                                  (str[left] >= 'A' && str[left] <= 'Z') || 
                                  (str[left] >= '0' && str[left] <= '9'))) {
            left++;
        }
        while (left < right && !((str[right] >= 'a' && str[right] <= 'z') || 
                                  (str[right] >= 'A' && str[right] <= 'Z') || 
                                  (str[right] >= '0' && str[right] <= '9'))) {
            right--;
        }
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false; 
        }
        left++;
        right--;
    }

    return true;
}
const input = 'A man, a plan, a canal: Panama';
console.log(Palindrome(input)); 

