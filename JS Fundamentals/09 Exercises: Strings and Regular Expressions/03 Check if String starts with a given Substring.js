function startWith(str, word){
    let index = str.startsWith(word);
    return index;       
}
console.log(startWith("How have you been?", "how"));
console.log(startWith("The quick brown fox…", "The quick brown fox…"));
console.log(startWith("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta"));