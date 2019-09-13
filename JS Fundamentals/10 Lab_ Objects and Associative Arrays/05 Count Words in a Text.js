function countWords(arrStr){
    let text = arrStr.join('');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let resObj = {};

    for(let word of words){
        resObj[word] ? resObj[word]++ : resObj[word] = 1;

    }
    return JSON.stringify(resObj);
}
console.log(countWords(["Far too slow, you're far too slow."]));
