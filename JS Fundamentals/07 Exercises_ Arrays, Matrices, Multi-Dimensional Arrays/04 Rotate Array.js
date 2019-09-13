function rotateArray(arrStr){
    let index;
    let numRotate = Number(arrStr.pop());
    let len = arrStr.length;
    let position = numRotate % len

    for (let i = 0; i < position; i++) {
        index = arrStr.pop();
        arrStr.unshift(index);


    }
    return arrStr.join(' ');
}


// function rotate(arr){
// 	var index;
//     let numRotate = Number(arr.pop());

// 	while(numRotate > 0){
// 		index = arr.pop();
// 		arr.unshift(index);

// 		numRotate--;
// 	}

// 	return arr.join(' ');
// }

// console.log(rotate(['1', '2', '3', '4', '2']));
// console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']));

console.log(rotateArray(['1', '2', '3', '4', '2']));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));