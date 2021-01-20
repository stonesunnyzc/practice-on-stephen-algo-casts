// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 2
function steps(n) {
    printSteps(1,n);
}

function printSteps(n,limit){
    let prefix='',suffix='';
    if(n>limit) return;
    prefix = new Array(n).fill('#').join('');
    if(limit - n > 0) suffix = new Array(limit - n).fill(' ').join('');
    console.log(prefix+suffix);
    printSteps(n+1,limit);
}

//Solution 1
// function steps(n) {
//     let step = '';
//     for(let i=0;i<n;i++){
//         step = step.trim()+ '#' + new Array(n-i-1).fill(' ').join('');
//         console.log(step);
//     }
// }

module.exports = steps;
