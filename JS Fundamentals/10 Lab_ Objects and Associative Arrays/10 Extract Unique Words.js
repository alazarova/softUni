function uniqueWords(strArr) {
    let unique = new Set();
    let text = strArr.join('\n');
    let word = text.split(/\W+/)
    .filter(e => e !== '')
    .map(e => e.toLowerCase())
    .forEach(e => unique.add(e));
    return [...unique].join(', ');

}
console.log(uniqueWords([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]));