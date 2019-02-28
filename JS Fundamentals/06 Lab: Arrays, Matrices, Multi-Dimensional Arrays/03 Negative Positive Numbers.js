function NegPosNum(arrNum){
   let newArr = []
   for (let i = 0; i < arrNum.length; i++) {
       const element = arrNum[i]
       if(element < 0){
        newArr.unshift(element)
       }
       else{
        newArr.push(element)
       }
   }
   console.log(newArr)

}

// function NegPosNum(arrNum){
//   let result = []
//   arrNum.forEach(e => (e < 0) ? result.unshift(e) : result.push(e))
//   return result
// }
console.log(NegPosNum([7, -2, 8, 9]));
console.log(NegPosNum([3, -2, 0, -1]));