function censor(text, words){
    for (const current of words) {
      let replaced = '-'.repeat(current.length);

      while(text.indexOf(current) > -1){
          text = text.replace(current, replaced);
      }
    }
    return text;
}
console.log(censor('roses are red, violets are blue', [', violets are', 'red']));