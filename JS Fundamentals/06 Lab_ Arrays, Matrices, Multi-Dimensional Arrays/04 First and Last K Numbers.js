function FirstAndLastK(arrNum){
  let firstNum = arrNum.shift()
  let firstLine = arrNum.slice(0, firstNum)
  let secondLine = arrNum.slice(-firstNum) 
    console.log(firstLine)
    console.log(secondLine)
}
console.log(FirstAndLastK([2, 7, 8, 9]));
console.log(FirstAndLastK([3, 6, 7, 8, 9]));