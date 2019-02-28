function cityMarkets(strArr) {
    let sum = new Map();

    for (let row of strArr) {
        let [town, product, sales] = row.split(' -> ');
        sales = sales.split(' : ').reduce((a,b) => a * b);
        if(!sum.has(town)){
            sum.set(town, new Map());
        }
        if(!sum.get(town).has(product)){
            sum.get(town).set(product, 0);
        }
        let oldSales = sum.get(town).get(product);
        sum.get(town).set(product, oldSales + sales);
    }

    // [...sum].forEach(([town, products]) => {
    //     console.log(`Town - ${town}`);
    //     [...products].forEach(([product, sales]) => console.log(`$$$${product} : ${sales}`));
    // });
    let print = ''
    for(let [town, products] of sum){
        print+=(`Town - ${town}\n`);
        for(let [product, sales] of products){
            print+=(`$$$${product} : ${sales}\n`);
        }
    }
    return print;
}

console.log(cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]));

// function cityMarkets(strArr) {
//     let sum = new Map();
//     for (let row of strArr) {

//         let [town, product, sales] = row.split(/\s*->\s*/);
//         let [quantity, price] = sales.split(/\s*:\s*/);  

//         let income = Number(quantity) * Number(price);

//         if (!sum.has(town)) {
//             sum.set(town, new Map());
//             sum.get(town).set(product, income)
//         }
//         else {
//             if (!sum.get(town).has(product)) {
//                 sum.get(town).set(product, income);
//             }
//             else {
//                 sum.get(town).set(product, town.get(product) + income);
//             }
//         }
//     }

//     let print='';

//     for (let [index, value] of sum){
//         print+=(`Town - ${index}\n`);

//         for (let [product, price] of sum.get(index)){
//             print+=(`$$$${product} : ${price}\n`);
//         }
//     }
//     return print;
// }
// console.log(cityMarkets([
//     'Sofia -> Laptops HP -> 200 : 2000', 
//     'Sofia -> Raspberry -> 200000 : 1500', 
//     'Sofia -> Audi Q7 -> 200 : 100000', 
//     'Montana -> Portokals -> 200000 : 1', 
//     'Montana -> Qgodas -> 20000 : 0.2', 
//     'Montana -> Chereshas -> 1000 : 0.3']));
