function captureNum(arrStr){
    let text = arrStr.join(' ');
    let regex = /\d+/g;
    let match = text.match(regex);
    return match.join(' ');
}
console.log(captureNum([
    "The300", "What is that?", 
    "I think it’s the 3rd movie.", 
    "Lets watch it at 22:45"
]));