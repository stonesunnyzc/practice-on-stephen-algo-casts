// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// teacher's ideal answer
function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

//teacher's answer 1
// function reverseInt(n){
//     const reversed = n.toString().split('').reverse().join('');
//     if(n<0){
//         return parseInt(reversed) * -1;
//     } else{
//         return parseInt(reversed);
//     }
// }

//my answer
// function reverseInt(n) {
//     let s = n.toString();
//     if(s.charAt(0) === '-'){
//         return parseInt('-' + reverseStr(s.substr(1)));
//     } 
//     return parseInt(reverseStr(s));
// }

// function reverseStr(s){
//     return s.split('').reverse().join('');
// }

module.exports = reverseInt;
