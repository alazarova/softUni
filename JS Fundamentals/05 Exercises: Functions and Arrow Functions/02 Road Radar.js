function speedLimit(arr){

    function checkSpeeding(limit, speed){
        let lowSpeed = limit + 20
        let midSpeed = limit + 40

        if(speed <= limit){
            return ''
        }
    if(speed > limit && speed <= lowSpeed ){
        return 'speeding'
    }else if(speed > lowSpeed && speed <= midSpeed) {
            return 'excessive speeding'
        }else if(speed > midSpeed){
            return 'reckless driving'
        } 
        return
    }

    var [speed, zone] = arr
  if(zone == "city"){
      let limit = 50
  return checkSpeeding(limit, speed)
  }

  if(zone == "residential"){
    let limit = 20
  return checkSpeeding(limit, speed)
}

  if(zone == "interstate"){
    let limit = 90
  return checkSpeeding(limit, speed)
  }

  if(zone == "motorway"){
    let limit = 130
    return checkSpeeding(limit, speed)
  }

}
console.log(speedLimit([40, 'city']));
console.log(speedLimit([21, 'residential']));
console.log(speedLimit([120, 'interstate']));
console.log(speedLimit([200, 'motorway']));