function heroicInventory(arrStr){
    let heroData = [];
    for (let i = 0; i < arrStr.length; i++) {
        const heroSplit = arrStr[i].split(' / ');
        let currName = heroSplit[0];
        let currLevel = Number(heroSplit[1]);
        let currItems = [];
        if(heroSplit.length > 2){
             currItems = heroSplit[2].split(", ");
        }
        
        let hero = {
            name: currName,
            level: currLevel,
            items: currItems
        };
        heroData.push(hero);

    }
  
    return JSON.stringify(heroData);
}
co0nsole.log(heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]));