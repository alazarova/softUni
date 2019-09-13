function cappyJuice(arrStr){
    let flavorsObj = {};
    let bottlesObj = {};

    for(arrStr of arrStr){
        let [juiceName, quantity] = arrStr.split(/\s=>\s/g);
        quantity = Number(quantity);
        flavorsObj[juiceName] = flavorsObj.hasOwnProperty(juiceName) ? flavorsObj[juiceName] + quantity : quantity;
       
        if(flavorsObj[juiceName] >= 1000) {
            let bottlesCount = Math.floor(flavorsObj[juiceName] / 1000);
           bottlesObj[juiceName] = bottlesCount;
        }
    }
      
    for(let juiceName in bottlesObj){
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`);
    }
}
console.log(cappyJuice([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"
]));
console.log(cappyJuice([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"
]));