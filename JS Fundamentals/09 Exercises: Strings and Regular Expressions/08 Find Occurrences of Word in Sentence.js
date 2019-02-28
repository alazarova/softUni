function countOccurences(text, word){
    let count = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    let match = regex.exec(text);

    while(match) {
        count++;
        match = regex.exec(text);
    }

    return count;

}
console.log(countOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(countOccurences('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(countOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));
