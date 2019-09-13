function colorfulNumber(n){
    let innerHTML = '<ul>\n'
    for (let i = 1; i <= n; i++) {
        let color = i % 2 === 0 ? 'blue' : 'green'

    innerHTML += `\t<li><span style="color:${color}">${i}</span></li>\n` 

    }
    innerHTML += '</ul>\n'
    return innerHTML
}

console.log(colorfulNumber(5));