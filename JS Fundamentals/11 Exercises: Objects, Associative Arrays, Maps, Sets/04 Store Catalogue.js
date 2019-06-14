function Catalogue(arrStr){
    let initialsMap = new Map();
    for(let dataRow of arrStr){
        let [productName, productPrice] = dataRow.split(/\s:\s/g);
        let initial = productName[0];

        if(!initialsMap.has(initial)){
            initialsMap.set(initial, new Map());
        }

        let productsMap = initialsMap.get(initial);
        productsMap.set(productName, productPrice);
    }
    let sortedInitials = [...initialsMap.entries()].sort(sort);
    for(let [initial, productsMap] of sortedInitials){
        console.log(initial);
        let sortedProducts = [...productsMap.entries()].sort(sort);
        for(let [name, price] of sortedProducts){
            console.log(` ${name}: ${price}`);
        }
    }
    function sort(a, b){
       return a[0].localeCompare(b[0])
    }
}
console.log(Catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]));