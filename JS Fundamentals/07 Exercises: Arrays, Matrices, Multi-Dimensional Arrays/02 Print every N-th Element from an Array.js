function NthElement(arrStr) {
    let opr = Number(arrStr.pop());
    for (let i = 0; i < arrStr.length; i += opr) {
        console.log(arrStr[i]);
    }
}
console.log(NthElement(['5', '20', '31', '4', '20', '2']));
console.log(NthElement(['dsa', 'asd', 'test', 'tset', '2']));
console.log(NthElement(['1', '2', '3', '4', '5', '6']));