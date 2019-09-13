function cookingNum(arr) {
    let Num = Number(arr.shift())

    let chopFun = (Num) => {
        return Num / 2
    }

    let diceFun = (Num) => {
        return Math.sqrt(Num)
    }

    let spiceFun = (Num) => {
        return Num + 1
    }

    let bakeFun = (Num) => {
        return Num * 3
    }

    let filletFun = (Num) => {
        return Num -= Num * 0.20
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        if (element == 'chop') {
           Num = chopFun(Num)
        }
        if (element == 'dice') {
            Num = diceFun(Num)
        }
        if (element == 'spice') {
            Num = spiceFun(Num)
        }
        if (element == 'bake') {
            Num = bakeFun(Num)
        }
        if (element == 'fillet') {
            Num = filletFun(Num)
        }
        console.log(Num)
    }

}

// ----


// function solve(arr){
//     let num = Number(arr.shift())

//     let commandsProcessor = (function(){        
//         return {
//             chop: () => num /= 2,
//             dice: () => num = Math.sqrt(num),
//             spice: () => num += 1,
//             bake: () => num *= 3,
//             fillet: () => num -= (num * 0.2),
//         }
//     })()

//     return arr.map(commands => {
//         return commandsProcessor[commands]()
//     }).join('\n')
// }
// console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));
// console.log((solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])));

console.log(cookingNum(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(cookingNum(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));