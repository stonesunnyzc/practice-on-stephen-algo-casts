// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// teacher's solution 2
function chunk(array, size) {
    let chunked = [];
    let i = 0;
    while(i<array.length){
        chunked.push(array.slice(i,i+size));
        i+=size;
    }
    return chunked;
}


// teacher's solution 1
// function chunk(array, size) {
//     let chunked = [];
//     for(let ele of array){
//         const last = chunked[chunked.length -1];
//         if(!last || last.length === size){
//             chunked.push([ele]);
//         }else{
//             last.push(ele);
//         }
//     }
//     return chunked;
// }


// my answer
// function chunk(array, size) {
//     let res = [];
//     if (array.length <= size) {
//       res.push(array);
//     } else {
//       let i = 0;
//       while (i * size < array.length) {
//         res.push(array.slice(i * size, (i + 1) * size));
//         i++;
//       }
//     }
//     return res;
// }

module.exports = chunk;
