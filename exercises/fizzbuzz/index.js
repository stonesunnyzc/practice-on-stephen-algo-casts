// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz




//my answer
function fizzBuzz(n) {
    let strMap = new Map();
    strMap.set(3,'fizz');
    strMap.set(5,'buzz');
    let arr = Array.from(strMap.keys());
    for(let i =1;i<=n;i++){
        print(i,getValidDivisors(i,arr),strMap);
    }
}

function getValidDivisors(n,arr){
    let result = [];
    for(let ele of arr){
        if(canBeDevideByTheNum(n,ele)) result.push(ele)
    }
    return result;
}

function print(n,arr,strObj){
    let s='';
    if(arr.length === 0){
        console.log(n);
    } else{
        arr.forEach(ele => {
            s = s+strObj.get(ele);
        });
        console.log(`${s}`);
    }
}

function canBeDevideByTheNum(n,num){
    return n%num === 0? true:false;
}


module.exports = fizzBuzz;
