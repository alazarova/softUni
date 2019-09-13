function townsToJson(strArr){
    strArr.shift();
    let towns = [];
    for(let row of strArr){
        let townTokens = row.split("|")
        .filter(e => e !== '')
        .map(e => e.trim());

        let town = {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        };
        towns.push(town);
    }
    return JSON.stringify(towns);
}


// function townsToJson(towns) {
//     let townsArr = [];
//     for (let town of towns.slice(1)) {
//         let [empty, townName, lat, lng] =
//         town.split(/\s*\|\s*/);

//         let townObj = {
//             Town: townName,
//             Latitude: Number(lat),
//             Longitude: Number(lng)
//         };
//         townsArr.push(townObj);
//     }
//     return JSON.stringify(townsArr);
// }

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));