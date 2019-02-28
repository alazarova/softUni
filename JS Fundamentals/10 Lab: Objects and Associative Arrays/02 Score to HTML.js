function scoreToHtml(json) {
    let html = `<table>\n`;
    html += `   <tr><th>name</th><th>score</th></tr>\n`
    let scores = JSON.parse(json);

    for (let score of scores) {
        html += `   <tr>`;
        html += `<td>${escapeHtml(score.name)}</td>`
        html += `<td>${score.score}</td>`
        html += `</tr>\n`
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


// console.log(scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
console.log(scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));
