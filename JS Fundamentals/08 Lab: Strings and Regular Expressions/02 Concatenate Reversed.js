function reversedStr(arrStr){
    let reversedStr = Array.from(arrStr.join('')).reverse().join('');
    return reversedStr;
}
console.log(reversedStr(['I', 'am', 'student']));
console.log(reversedStr(['race', 'car']));