function aggregateTable(arrStr){
    let sum = 0;
    let newArr = [];
    for(var i = 0; i < arrStr.length; i++){
        var element = arrStr[i];
       let splitLine = element.split("|");
       let nameCity = splitLine[1].trim();
       newArr.push(nameCity);
       let codeCity = Number(splitLine[2]);
       sum += codeCity


    }
    console.log(newArr.join(', '));
    console.log(sum);
}
console.log(aggregateTable(
['| Sofia           | 300',
 '| Veliko Tarnovo  | 500',
 '| Yambol          | 275']
));