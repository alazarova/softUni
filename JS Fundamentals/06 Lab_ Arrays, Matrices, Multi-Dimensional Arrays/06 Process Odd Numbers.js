function oddNum(arrNum){
    let oddNum = (arrNum.filter((num, i) => i % 2 == 1))

let newArr = oddNum.map(x => x * 2)
console.log(newArr.reverse().join(' '))
}

// function solve(arr) {
//     let result = arr.filter((num, i)=>i % 2 == 1).map(x=>x * 2).reverse().join(" ")
//     console.log(result)

// }
console.log(oddNum([10, 15, 20, 25]));
console.log(oddNum([3, 0, 10, 4, 7, 3]));