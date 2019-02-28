// V1
function nonDecreasing(arrNum) {

    let currentBiggestNum = Number.NEGATIVE_INFINITY;
    let arrSize = arrNum.length;
    for (let i = 0; i < arrSize; i++) {
        let currentNumber = arrNum.shift();
        if(currentNumber >= currentBiggestNum){
            currentBiggestNum = currentNumber;
            console.log(currentNumber);

        }
    }
}




// V2
// function nonDecreasing(arrNum) {

//     let output = [];
//     output.push(arrNum[0]);
//     for(let i = 1; i < arrNum.length; i++){
//         if(arrNum[i] >= output[output.length-1]){
//             output.push(arrNum[i]);
//         }
//     }
//     for(let element of output){
//         console.log(element);
//     }
// }


// V3
// function nonDecreasing(arrNum) {
//     let result = [];
//     let biggest = arrNum[0];
//     for (let i = 0; i < arrNum.length; i++) {

//         if(arrNum[i]>=biggest){
//             result.push(arrNum[i]);
//             biggest = arrNum[i];
//         }
//     }
//     console.log(result.join('\n'));
// }

// V4

// function nonDecreasing(arrNum) {
//         let max = arrNum[0];
//         console.log(arrNum.filter((a) => a >= max && (max = a) === a).join('\n'));
// }



console.log(nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(nonDecreasing([1, 2, 3, 4]));
console.log(nonDecreasing([20, 3, 2, 15, 6, 1]));