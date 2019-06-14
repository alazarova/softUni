function buildWall(arrStr){
    arrStr = arrStr.map(Number);
    let concrete = [];
    while(true){
        let buildOn = false;
        let dailyConcrete = 0;
        for(let i = 0; i < arrStr.length; i++){
            if(arrStr[i] !== 30){
                dailyConcrete += 195;
                arrStr[i]++;
                buildOn = true;
            }
        }
        if(!buildOn){
            break;
        }else{
            concrete.push(dailyConcrete);
        }
    }
    let sumOfConcrete = concrete.reduce((a, b) => a + b);
    console.log(concrete.join(', '));
    console.log(`${sumOfConcrete * 1900} pesos`);

}
console.log(buildWall(['21', '25', '28']));