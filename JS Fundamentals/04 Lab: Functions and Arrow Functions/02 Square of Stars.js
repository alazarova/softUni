function squareOfStars(count = 5) {
function printSquare(n = count) {
    console.log('*' + ' *'.repeat(n-1))
}
    for (let i = 1; i <= count; i++) {
        printSquare()
    }

}

console.log(squareOfStars());