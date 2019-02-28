function averageValue(num) {
    let numAsStr = num.toString()
    let sum = sumDigits(numAsStr)
    while (sum / numAsStr.length <= 5) {
        numAsStr += '9'
        sum = sumDigits(numAsStr)
    }
    console.log(numAsStr)
    function sumDigits(numAsStr) {
        let sum = 0
        for (let digit of numAsStr) {
            sum += Number(digit)
        }
        return sum
    }
}
console.log(averageValue(101));
console.log(averageValue(5835));