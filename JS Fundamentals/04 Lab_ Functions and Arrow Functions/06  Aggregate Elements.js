function sumFunctions (array1) {
  const ElementsCalc  = (array1) =>  {
    return array1.reduce((a, b) => a + b)
  }
  const inverseCalc = (array1) => {
    return array1.map(x => (1 / x)).reduce((a, b) => a + b)
  }
  const concatCalc =  (array1) => {
    return array1.join('')
  }

  return ElementsCalc(array1) + '\n' + inverseCalc(array1) + '\n' + concatCalc(array1) 
}

// ----

// function aggregate(arr){
//     function aggregate (elements, start, func){
//         for(let e of elements){
//             start = func(start, e)
//         }
//         return start
//     }
//     console.log(aggregate(arr, 0, (a, b) => a + b))
//     console.log(aggregate(arr, 0, (a, b) => a + 1 / b))
//     console.log(aggregate(arr, '', (a, b) => a + b))
// }

console.log(sumFunctions([1, 2, 3]))
console.log(sumFunctions([2, 4, 8, 16]))