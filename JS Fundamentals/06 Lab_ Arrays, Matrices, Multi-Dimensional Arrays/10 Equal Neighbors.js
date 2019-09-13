    function equalNeighbors(arr){
        var counter = 0
        for (var row = 0; row < arr.length-1; row++) {
            for (var col = 0; col < arr[row].length; col++) {
                if(arr[row][col] == arr[row][col+1]){
                    counter++
                }if(arr[row][col] == arr[row+1][col]){
                    counter++
                }if(row == arr.length-2 && arr[row+1][col] == arr[row+1][col+1]){
                    counter++
                }
            }
        }
        return counter
    }

console.log(equalNeighbors([['2', '3', '4', '7', '0'],['4', '0', '5', '3', '4'],['2', '3', '5', '4', '2'],['9', '8', '7', '5', '4']]
));
console.log(equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));