function sortArray(arrStr){
    arrStr.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b)
      })
      return arrStr.join('\n');
}
console.log(sortArray(['alpha', 'beta', 'gamma']));
console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArray(['test', 'Deny', 'omen', 'Default']));