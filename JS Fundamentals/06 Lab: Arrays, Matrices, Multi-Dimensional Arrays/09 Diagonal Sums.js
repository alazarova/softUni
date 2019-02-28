function diagonalSum(matrix){
    let mainSum = 0, secondarySum = 0
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row]
        console.log(matrix[row][row])
        secondarySum += matrix[row][matrix.length - row - 1]
    }
    console.log(mainSum + ' ' + secondarySum)

    matrix[row][row]

        // [3, 5, 17],
        // [-1, 7, 14],
        // [1, -8, 89]

}

console.log(diagonalSum(
    [
    [20, 40],
    [10, 60]
]
));
console.log(diagonalSum(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
));