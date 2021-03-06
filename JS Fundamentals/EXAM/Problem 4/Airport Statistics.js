function airStat(dataRows){
    let airport = new Map();
    let townStatistics = new Map();
    let townPlanes = new Map();

    for(let dataRow of dataRows){
        let [planeId, town, passengersCount, action] = dataRow.split(/\s+/g);
        passengersCount = Number(passengersCount);

        if(action === 'land'){

            if(airport.has(planeId)){
                continue;
            }else{
                airport.set(planeId, 'land');
            }

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0, 0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townStatistics.get(town)[0] += passengersCount;
            townPlanes.get(town).add(planeId);

        }else{

            if(airport.has(planeId)){
                airport.delete(planeId);
            }else{
                continue;
            }

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0, 0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.has(town, new Set());
            }

            townStatistics.get(town)[1] += passengersCount;
            townPlanes.get(town).add(planeId);
        }
    }

let sortedAirport = Array.from(airport.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

    console.log('Planes left:');

    for(let [planeId] of sortedAirport){
        console.log(planeId);
        // console.log(`- ${planeId}`);
    }
let sortedTowns = [...townStatistics.entries()].sort(sortTowns);

for (let [town, statistics] of sortedTowns) {
    console.log(town);
    console.log(`Arrivals: ${statistics[0]}`);
    console.log(`Departures: ${statistics[0]}`);

   let sortedPlanes = [...townPlanes.get(town).values()].sort((a, b) => a.localeCompare(b));
   console.log('Planes: ');
   
   for(planeId of sortedPlanes){
       console.log(`-- ${planeId}`);
   }
}
    function sortTowns(a, b){
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCriteria = bArrivals - aArrivals;
        console.log(firstCriteria);

        if(firstCriteria !== 0){
            return firstCriteria;
        }else{
            return a[0].localeCompare(b[0]);
        }
    }


console.log(sortedAirport);
}
console.log(airStat([
    "Boeing474 Madrid 300 land", 
    "AirForceOne WashingtonDC 178 land", 
    "Airbus London 265 depart", 
    "ATR72 WashingtonDC 272 land", 
    "ART72 Madrid 135 depart"
]));