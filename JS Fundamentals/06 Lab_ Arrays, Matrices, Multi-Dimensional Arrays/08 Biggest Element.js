function BiggestNumOfMatrix(matrix) {
    // let maxNum = Number.MIN_SAFE_INTEGER
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //         var num = matrix[row][col]
    //         if(maxNum < matrix[row][col]){
    //             maxNum = matrix[row][col]
    //         }
    //     }
    // }
    // return maxNum

    return Math.max(...[].concat.apply([], matrix))

}
console.log(BiggestNumOfMatrix([[20, 50, 10], [8, 33,  145]]));
console.log(BiggestNumOfMatrix([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));