const readline = require('readline');

const alphabet = {
    "�": "16",
    "�": "17",
    "�": "18",
    "�": "19",
    "�": "20",
    "�": "1",
    "�": "2",
    "�": "3",
    "�": "4",
    "�": "5",
    "�": "6",
    "�": "7",
    "�": "8",
    "�": "9",
    "�": "10",
    "�": "12",
    "�": "11",
    "�": "21",
    "�": "13",
    "�": "14",
    "�": "15",
    "�": "61",
    "�": "71",
    "�": "80",
    "�": "98",
    "�": "22",
    "�": "24",
    "�": "23",
    "�": "26",
    "�": "28",
    "�": "69",
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('������� ��������� ��� ����������: ', (input) => {
    const message = input.toLowerCase();

    const encryptedMessage = encryptMessage(message);
    console.log('������������� ���������:', encryptedMessage);

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