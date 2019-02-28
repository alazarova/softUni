function cone(r,h){
    let s = Math.sqrt(r * r + h * h)
    let volume = Math.PI * r * r * h / 3
    volume = Math.round(volume * 1000) / 1000
    console.log("volume = " + volume)
    let area = Math.PI * r * (r + s)
    area = Math.round(area * 1000) / 1000
    console.log("area = " + area)
}
console.log(cone(3, 5))
console.log(cone(3.3, 7.8))
