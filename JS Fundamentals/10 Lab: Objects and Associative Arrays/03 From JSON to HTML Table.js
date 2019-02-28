function scoreToHtml(json) {
    let html = `<table>\n`;
    let arr = JSON.parse(json);

    html += `   <tr>`;
    for (let key of Object.keys(arr[0])) {
        html += `<th>${escapeHtml(key)}</th>`;
    }
    html += `</tr>\n`
    for (let obj of arr) {
        let keys = Object.keys(obj);
        let value = "";

        for (var key of keys) {
            if(typeof obj[key] == 'string'){
                obj[key] = escapeHtml(obj[key])
            }
            value +=  '<td>' +  obj[key] + '</td>';
        }
        html += `   <tr>`;
        html += `${value}`
        html += `</tr>\n`;

    }

    html += `</table>`;
    return html;

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

// console.log(scoreToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"}, {"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'));
console.log(scoreToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));