import { aside, button, changeDisplay, changeJustifyContent, insertText, toBeEmpty } from './view.js';

export const keysToEncrypt = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}


export const encrypt = (msg, board) => {
    const message_splited = msg.split(',');
    const encryptedMessage = [];

    message_splited.forEach(msg => {
        for (let i = 0; i < msg.length; i++) {
            let cacheWord = '';
            if (Object.keys(keysToEncrypt).some(key => msg[i].includes(key))) {
                cacheWord += Object.values(keysToEncrypt)[Object.keys(keysToEncrypt).findIndex(key => key === msg[i])]
            } else {
                cacheWord += msg[i];
            }
            encryptedMessage.push(cacheWord);
        }
    })

    const finalEncryptedMessage = encryptedMessage.join('');

    insertText(board, finalEncryptedMessage)
    changeDisplay(toBeEmpty, 'none');
    changeDisplay(button[2], 'block');
    changeJustifyContent(aside, 'space-between');
}

export const decrypt = (msg, board) => {
    const decryptedMessage = [];

    for (let value in keysToEncrypt) {
        let regex = new RegExp(keysToEncrypt[value], 'g');

        msg = msg.replace(regex, value)
    }
    decryptedMessage.push(msg);

    const finalDecryptedMessage = decryptedMessage.join('');

    insertText(board, finalDecryptedMessage)
    changeDisplay(toBeEmpty, 'none');
    changeDisplay(button[2], 'block');
    changeJustifyContent(aside, 'space-between');
}

export const checkIsEncrypted = (msg) => {
    const message_splited = msg.split(' ');
    var messageIsEncrypted = false;

    for (let msg of message_splited) {
        if (Object.values(keysToEncrypt).some(key => msg.includes(key))) {
            messageIsEncrypted = true;
        }
    }

    return messageIsEncrypted
}

export const checkIsEmpty = (msg) => {
    if (msg.length === 0) {
        return true;
    } else false;
}

export const checkIsCapitalized = (msg) => {
    if (/[A-Z]/g.test(msg)) {
        return true;
    } else false;
}

export const checkSpecialCaracter = (msg) => {
    if (/[^a-z ]/.test(msg)) {
        return true;
    } else false;
}

export const copyMsg = (board) => {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(board);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}