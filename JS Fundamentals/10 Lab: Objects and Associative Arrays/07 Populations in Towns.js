function townPop(strArr) {
let towns = new Map();
    for (let row of strArr) {
        let [name, pop] = row.split(' <-> ');

        if(!towns.has(name)) {
            towns.set(name, 0);
        }
        towns.set(name, towns.get(name) + Number(pop));
    }
    return [...towns].forEach(([town, pop]) => console.log(`${town} : ${pop}`));
}
console.log(townPop([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]));
