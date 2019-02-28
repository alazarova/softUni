function countOccurences(str, text){
    let count = 0;
    let index = text.indexOf(str);
    while(index > -1){
        count++;
        index = text.indexOf(str, index + 1);
    }
    return count;

}
console.log(countOccurences('the', 'the quick brown fox jumps over the lay dog.'));
console.log(countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));