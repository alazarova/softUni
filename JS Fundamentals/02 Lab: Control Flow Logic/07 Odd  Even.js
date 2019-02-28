function oddEven(num){
if(num % 2 === 0){
    console.log("even")
}else if(!Number.isInteger(num)){
    console.log("invalid")
}else{
    console.log("odd")
}
}

// function oddEven(num){
//     if(num % 2 === 0){
//         console.log("even")
//     }else if(num == Math.round(num)){
//         console.log("odd")
//     }else{
//         console.log("invalid")
//     }
//     }

oddEven(5);
oddEven(8);
oddEven(1.5);