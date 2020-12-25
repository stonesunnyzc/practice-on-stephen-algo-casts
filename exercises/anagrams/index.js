// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//teacher's solution 2
function anagrams(stringA, stringB) {
    return sortString(stringA) === sortString(stringB);
}

function sortString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

// //teacher's solution 1
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
//     for(const key in aCharMap){
//         if(aCharMap[key] !== bCharMap[key]) return false;
//     }
//     return true;
// }

// function buildCharMap(str){
//     let hash = {};
//     for(const char of str.replace(/[^\w]/g,'').toLowerCase()){
//         hash[char] = hash[char] ? hash[char] + 1 : 1;
//     }
//     return hash;
// }

// // my answer
//   function anagrams(stringA, stringB) {
//     let regExp = /[\s]/g;
//     let strAHash = getCharsCountOfStr(stringA.replace(regExp, "").toLowerCase());
//     let strBHash = getCharsCountOfStr(stringB.replace(regExp, "").toLowerCase());
//     if (strAHash.size !== strBHash.size) return false;
//     for (let key in strAHash) {
//       if (strAHash[key] !== strBHash[key]) return false;
//     }
//     return true;
//   }
  
//   function getCharsCountOfStr(str) {
//     const hash = new Map();
//     for (const char of str) {
//       if (hash[char]) {
//         hash.set(char, hash.get(char) + 1);
//       } else {
//         hash[char] = 1;
//         hash.set(char, 1);
//       }
//     }
//     return hash;
//   }
    

module.exports = anagrams;
