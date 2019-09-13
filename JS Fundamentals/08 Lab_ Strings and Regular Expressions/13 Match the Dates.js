function matchDate(arrStr) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let res = pattern.exec(arrStr);

    while(res !== null) {
        let [date, day, month, year] = res;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        res = pattern.exec(arrStr);
    }


}
console.log(matchDate("I am born on 30-Dec-1994.This is not date: 512-Jan-1996.My father is born on the 29-Jul-1955."));
console.log(matchDate("matchDate(1-Jan-1999 is a valid date. So is 01-July-2000. I am an awful liar, by the way – Ivo, 28-Sep-2016."));