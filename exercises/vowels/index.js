// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution 2 regular expression
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length: 0;
}

//solution 1
// function vowels(str) {
//     let res = 0;
//     const vowels = ['a', 'e','i', 'o','u','A', 'E','I', 'O','U'];
//     for(let c of str){
//         if(vowels.indexOf(c)>-1)  res += 1;
//     }
//     return res;
// }

module.exports = vowels;
