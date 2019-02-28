
function employeData(arrStr) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9]\d*)\s-\s([A-Za-z0-9 \-]+)$/;
    let result = [];
    for(let element of arrStr){
        let match = regex.exec(element);
        if(match){
        result.push(`Name: ${match[1]}
Position: ${match[3]} 
Salary: ${match[2]}`);
        }
    }
    return result.join("\n");
}
console.log(employeData([
    "Isacc - 1000 - CEO", 
    "Ivan - 500 - Employee", 
    "Peter - 500 - Employee"
]));
console.log(employeData([
    "Jonathan - 2000 - Manager",
    "Peter- 1000- Chuck",
    "George - 1000 - Team Leader",
    "I - 01 - P"
]));