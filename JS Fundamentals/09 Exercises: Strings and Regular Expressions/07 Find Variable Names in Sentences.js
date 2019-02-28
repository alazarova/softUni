function findVar(str){
    let regex = /\b\_[A-Za-z0-9]+\b/g;
    let match = str.match(regex);
    let mapWord = match.map(w => w.split("_").join(""));
    return mapWord.join(',');

}
console.log(findVar("The _id and _age variables are both integers."));
console.log(findVar("Calculate the _area of the _perfectRectangle object."));
console.log(findVar("__invalidVariable _evenMoreInvalidVariable_ _validVariable"));
