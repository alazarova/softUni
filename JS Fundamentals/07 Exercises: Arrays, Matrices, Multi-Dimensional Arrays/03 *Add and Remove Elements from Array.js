function addAndRemoveElements(arr) {
    let result = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(counter++);
        } else if (arr[i] === 'remove'){
            result.pop(counter++);
        }
    }

    if (result[0] === undefined) {
        console.log('Empty');
    } 
        return result.join('\n');

    }


console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemoveElements(['remove', 'remove', 'remove']));