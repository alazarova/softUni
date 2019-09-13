function smallestNum(arrNum) {
    let res = arrNum.sort((a, b) => a - b).slice(0, 2)
      result[0] + '' + result[1]; 
    return res.join(" ");
}
console.log(smallestNum([30, 15, 50, 5]));
console.log(smallestNum([3, 0, 10, 4, 7, 3]));