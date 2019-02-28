function printTriangle(count) {
function printStars(n) {
    console.log('*'.repeat(n))
}
    for (let i = 1; i <= count; i++) {
        printStars(i)
    }

        for (let i = count - 1; i >= 1; i--) {
            printStars(i)

        }
}

console.log(printTriangle(4));