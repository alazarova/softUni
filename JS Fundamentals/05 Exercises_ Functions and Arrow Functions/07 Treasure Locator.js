function tresureLocator(arr){

        let tuvaluIsland = (x, y) => {
            if((x >= 1 && x <= 3) && (y >= 1 && y <= 3)){
                return true
            }
            return false
        }
        let tokelauIsland = (x, y) => {
            if((x >= 8 && x <= 9) && (y >= 0 && y <= 1)){
                return true
            }
            return false
        }
        let samoaIsland = (x, y) => {
            if((x >= 5 && x <= 7) && (y >= 3 && y <= 6)){
                return true
            }
            return false
        }
        let tongaIsland = (x, y) => {
            if((x >= 0 && x <= 2) && (y >= 6 && y <= 8)){
                return 'Tonga'
            }
        }
        let cookIsland = (x, y) => {
            if((x >= 4 && x <= 9) && (y >= 7 && y <= 8)){
                return 'Cook'
            }
        }

    for (let i = 0; i < arr.length; i += 2) {
                let x = arr[i]
                let y = arr[i + 1]
           if(tuvaluIsland(x, y)){
                console.log('Tuvalu')
           }
           else if(tokelauIsland(x, y)){
                console.log('Tokelau')
           }
           else if(samoaIsland(x, y)){
               console.log('Samoa')
           }  
           else if(tongaIsland(x, y)){
            console.log('Tonga')
            }
            else if(cookIsland(x, y)){
            console.log('Cook')
            }
                else{
                    console.log("On the bottom of the ocean")
                }
    }
}
console.log(tresureLocator([4, 2, 1.5, 6.5, 1, 3]));
console.log(tresureLocator([6, 4]));