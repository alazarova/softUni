function capitalizeWord(str) {
    let lowerLetter = str.toLowerCase();

    return lowerLetter.replace(/\b\w/g, (one) => one.toUpperCase());
}


function solve(txt) {
    txt = txt.toUpperCase().split(' ');
    let result = [];
    for (let i = 0; i < txt.length; i++) {
        let splitted = txt[i].split('');
        for (let j = 1; j < splitted.length; j++) {
           splitted[j] = splitted[j].toLowerCase();
        }
        result.push(splitted.join(''));
    }
    return result.join(' ');

} 
console.log(capitalizeWord("Capitalize these words"));
console.log(capitalizeWord("Was that Easy? tRY thIs onE for SiZe!"));