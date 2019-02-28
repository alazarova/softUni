function templateFormat(arr) {
    let str = ''
    str += '<?xml version="1.0" encoding="UTF-8"?>\n'
    str += `<quiz>\n`
    for (let i =  0; i < arr.length; i += 2) {

        str += `\t<question>\n`
            str += arr[i] + '\n'
        str += `\t</question>\n`

        str += `\t<answer>\n`
        str += arr[i + 1] + '\n'
        str += `\t</answer>\n`
    }
    str += `</quiz>`
    return str
}
console.log(templateFormat(
["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]
));