function userNames(arrStr) {
    let users = arrStr.map(s => s.split('@'));
    let result = [];
    for (let user of users) {
        let [name, domain] = user;
        let domainElements = domain.split('.');
        domainElements = domainElements.map(e => e[0])
        let username = name + '.' + domainElements.join('');

        result.push(username);
    }
    return result.join(', ');
}

console.log(userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));