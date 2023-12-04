const readline = require('readline');

const alphabet = {
    "а": "16",
    "б": "17",
    "в": "18",
    "г": "19",
    "д": "20",
    "е": "1",
    "ё": "2",
    "ж": "3",
    "з": "4",
    "и": "5",
    "й": "6",
    "к": "7",
    "л": "8",
    "м": "9",
    "н": "10",
    "о": "12",
    "п": "11",
    "р": "21",
    "с": "13",
    "т": "14",
    "у": "15",
    "ф": "61",
    "х": "71",
    "ц": "80",
    "ч": "98",
    "ш": "22",
    "щ": "24",
    "ы": "23",
    "э": "26",
    "ю": "28",
    "я": "69",
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите сообщение для шифрования: ', (input) => {
    const message = input.toLowerCase();

    const encryptedMessage = encryptMessage(message);
    console.log('Зашифрованное сообщение:', encryptedMessage);

    rl.close();
});

function encryptMessage(message) {
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const encryptedChar = alphabet[char];

        if (encryptedChar) {
            encryptedMessage += encryptedChar + ' ';
        }
    }

    return encryptedMessage.trim();
}