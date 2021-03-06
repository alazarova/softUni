function solve(commands) {

    let processor = (function() {
        text = '';
        return function processor(commandString) {
            let commandTokens = commandString.split(' ');

            switch (commandTokens[0]) {
                case 'append':
                    text += commandTokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(commandTokens[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(commandTokens[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();
    for (let command of commands) {
        processor(command);
    }
}