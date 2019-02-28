function solve(numArr) {
    let targetSize = numArr[0]
    let opStr = 'Cut'

    for (let i = 1; i < numArr.length; i++) {
        let microns = numArr[i]
    console.log(`Processing chunk ${microns} microns`)
   microns = executeOperation(microns, 'Cut', cut)
   microns = executeOperation(microns, 'Lap', lap)
   microns = executeOperation(microns, 'Grind', grind)
   microns = executeOperation(microns, 'Etch', etch)
   if( microns + 1 === targetSize){
    microns = xRay(microns)
   }
   console.log(`Finished crystal ${microns} microns`)

    }
    function cut(crystal){
        return crystal / 4
    }
    function lap(crystal){
        return crystal -=crystal * 0.2
    }
    function grind(crystal){
        return crystal -= 20 
    }
    function etch(crystal){
        return crystal -= 2 
    }
    function xRay(crystal){
        console.log('X-ray x1')
        return ++crystal
    }
    function transportingAndWashing(crystal){
        console.log('Transporting and washing')
        return Math.floor(crystal)
    }

    function executeOperation(microns, opStr, op){
        let newSize = op(microns)
        let counter = 0
        while (newSize >= targetSize 
            || Math.floor(targetSize - newSize) === 1){
    microns = newSize
    newSize = op(microns)
    counter++

        }
        if( counter > 0 ){
            console.log(`${opStr} x${counter}`)
            microns = transportingAndWashing(microns)
        }
        return microns
    }
}
console.log(solve([1375, 50000]));
console.log(solve([1000, 4000, 8100]));