function figureArea(w, h, W, H){
    area = [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)]

    return s1 + s2 - s3;
}
console.log(figureArea(2, 4, 5, 3));
console.log(figureArea(13, 2, 5, 8));