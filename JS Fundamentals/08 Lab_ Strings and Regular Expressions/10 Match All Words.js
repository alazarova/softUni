function allWords(str){
 let regex = /\w+/g;
 return str.match(regex).join("|");
}
console.log(allWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
console.log(allWords('_(Underscores) are also word characters'));