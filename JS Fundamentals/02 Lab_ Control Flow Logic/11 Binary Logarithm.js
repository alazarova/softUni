function log(nums){
    for(let num of nums){
        console.log(Math.log2(num))
    }
}
console.log(log([1024, 1048576, 256, 1, 2]));