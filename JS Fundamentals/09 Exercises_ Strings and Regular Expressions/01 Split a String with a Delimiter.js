function splitString(str, delimiter){
let split = str.split(delimiter);
console.log(split.join("\n"));

}
console.log(splitString("One-Two-Three-Four-Five" , "-"));
console.log(splitString("http://platform.softuni.bg" , "."));