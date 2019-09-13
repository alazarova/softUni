function chessBoard(n){
   let innerHTML = '<div class="chessboard">\n'

for (let row = 0; row < n; row++) {
    innerHTML += "<div>\n"

    // let boxColor = row % 2 === 0 ? 'white' : 'black'

   for (let col = 0; col < n; col++) {
  let boxColor = (row + col) % 2 == 0  ? 'black' : 'white'

    innerHTML += `<span class="${boxColor}"></span>\n`

   }
   innerHTML += "</div>\n"

}
innerHTML += "</div>"
return innerHTML
}
console.log(chessBoard(3));

// function chessboard(n){
//     let html ='<div class="chessboard">\n'
//     let color = 'black'
//     for(let row = 1; row <= n; row++){
//         html += "  <div>\n"
//         for(let cow = 1; cow <= n;cow++){
//             html += `    <span class="${color}"></span>\n`
//             if (color == "white"){
//                 color = "black"
//             }else{
//                 color = "white"
//             }
//         }
//         html += "  </div>\n"
//         if(n % 2 == 0){
//             if (color == "white"){
//                 color = "black"
//             }
//             else{
//                 color = "white"
//             }
//         }
//     }
//     html += "</div>\n"
//     return html
// }
console.log(chessboard(5))