function distancePoints(x1, y1, x2, y2){
    var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) )
    return dist;
}
console.log(distancePoints(2, 4, 5, 0));
console.log(distancePoints(2.34, 15.66, -13.55, -2.9985));
