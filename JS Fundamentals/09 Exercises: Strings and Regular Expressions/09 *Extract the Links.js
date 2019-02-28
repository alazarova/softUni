function extractLink(arrStr) {
    let newArr = [];
    let regex = /www\.([A-Za-z\d\-]+)(\.[a-z]+)+/g;
    for (let element of arrStr) {
        let match = regex.exec(element);
        while (match) {
            newArr.push(match[0]);
            match = regex.exec(element);
        }

    }

    return newArr.join("\n");
}
console.log(extractLink([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]));