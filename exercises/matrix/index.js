// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const res = [];
    let startRow,endRow,counter,startColumn,endColumn;

    startRow = 0;
    startColumn = 0;
    counter = 1;
    endRow = n -1 ;
    endColumn = n -1 ;
    for(let i=0;i<n;i++){
        res.push([]);
    }

    while(startColumn <= endColumn && startRow <= endColumn){

       //top row
       for(let i = startColumn; i<= endColumn; i++){
            res[startRow][i] = counter;
            counter++;
       }
       startRow++;

       //Right column
       for(let i = startRow; i<= endRow; i++){
           res[i][endColumn] = counter;
           counter ++;
       }
       endColumn--;

       //Bottom row
       for(let i=endColumn; i>= startColumn; i--){
           res[endRow][i] = counter;
           counter++;
       }
       endRow--;

       //Left column
       for(let i=endRow; i >= startRow; i--){
           res[i][startColumn] = counter;
           counter++;
       }
       startColumn++;

    }
    return res;
}

module.exports = matrix;
