// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution 2
function capitalize(str) {
    let res = str.charAt(0).toUpperCase();
    for(let i=1;i<str.length;i++){
        if(str.charAt(i-1) === ' ') {
            res += str.charAt(i).toUpperCase();
        } else {
            res += str.charAt(i);
        }
    }
    return res;
}

//my answer & solution1
// function capitalize(str) {
//     let res = str.split(' ').map(value =>{
//         return value.slice(0,1).toUpperCase() + value.slice(1);
//     });
//     return res.join(' ');
// }

module.exports = capitalize;
