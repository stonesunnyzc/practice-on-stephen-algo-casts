// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    printSteps(1,n);
}

function printSteps(n,limit){
    let side='',content='';
    if(n>limit) return;
    if(limit - n > 0) side = new Array(limit-n).fill(' ').join('');
    content = new Array(2*n-1).fill('#').join('');
    console.log(side+content+side);
    printSteps(n+1,limit);
}
module.exports = pyramid;
