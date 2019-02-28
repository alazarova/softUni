function delimiter(arr) {
    let opr = arr.pop()
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            res += arr[i]
        } else {
            res += opr + arr[i]
        }

    }
    console.log(res)
}
console.log(delimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(delimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));