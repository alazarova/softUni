function wordsUppercase(str){
  return  str.split(/\W+/).filter(x => x !== '').join(', ').toUpperCase()
}
console.log(wordsUppercase('Hi, how are you?'))