function leapYear(year) {
    let res = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
    return res ? "yes" : "no";

}
console.log(leapYear(1999));
console.log(leapYear(2000));
console.log(leapYear(1900));