function jsonTable(arrStr) {
    let html = `<table>\n`;
    for (let i = 0; i < arrStr.length; i++) {
        const element = arrStr[i];
        html += `   <tr>\n`;

        let obj = JSON.parse(element);
        for (let key in obj) {
            let objVal = obj[key];
            html += `\t<td>${objVal}</td>\n`;
        }
        html += `   </tr>\n`

    }

    html += `</table>`;
    return html;
}

console.log(jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));