function billRes(strArr) {

    let NameProducts = strArr.filter((num, i) => i % 2 == 0).join(", ");
    let priceProducts = strArr.filter((num, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);

    return `You purchased ${NameProducts} for a total sum of ${priceProducts}`;;
}
console.log(billRes(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
console.log(billRes(['Cola', '1.35', 'Pancakes', '2.88']));