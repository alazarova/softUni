function circleArea(r){
    let area = Math.PI * r * r
    console.log(area)
    let fix = area.toFixed(2)
    return fix;
}
console.log(circleArea(5));
