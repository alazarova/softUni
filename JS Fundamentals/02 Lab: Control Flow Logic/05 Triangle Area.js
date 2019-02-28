function triangleArea(a, b, c){
    let st = (a + b + c) / 2
    return Math.sqrt(st * ((st - a) * (st - b) * (st - c)))
}
console.log(triangleArea(2, 3.5, 4));