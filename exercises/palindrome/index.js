// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution 2 by teacher
//drawback: we don't need to loop every element of an array, just the first half is enough
function palindrome(str){
    return str.split('').every((char,i)=>{
        return char === str[str.length - i - 1];
    });
}

//most straigthfoward answer 
// function palindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return reversed === str;
// }

//first anwser by own
// function palindrome(str) {
//     let len = str.length;
//     let right, left;
//     if(len%2 !==0){
//         right = str.substring(0,Math.floor(len/2));
//         left = str.substring(Math.ceil(len/2),len).split('').reverse().join('');
//     } else{
//         right = str.substring(0,str.length/2);
//         left = str.substring(str.length/2,str.length).split('').reverse().join('');
//     }

//     return right === left? true:false;
// }

module.exports = palindrome;
