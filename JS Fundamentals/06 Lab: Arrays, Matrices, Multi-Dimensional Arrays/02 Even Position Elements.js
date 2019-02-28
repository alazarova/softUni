function evenPosition(arrStr){
    let arr = []; 
    for (let i = 0; i < arrStr.length; i += 2) {
        let evenNum = arrStr[i]
        // let res = arrStr[i].join(' ')
        arr.push(evenNum)
    }
   return arr.join(' ')
    }
    console.log(evenPosition(['20', '30', '40']));
    console.log(evenPosition(['5', '10']));

    // let arr = ['20', '30', '40']
// console.log(arr.filter((e, i) => i % 2 == 0).join(' '))