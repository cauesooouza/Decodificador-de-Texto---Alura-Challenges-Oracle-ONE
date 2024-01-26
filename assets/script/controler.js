import { checkIsCapitalized, checkIsEmpty, checkIsEncrypted, checkSpecialCaracter, copyMsg, decrypt, encrypt } from './model.js';
import { board, button, input_msg, showNotification } from './view.js';

const handleButton = (verb) => {
    const key = verb.target.className;
    const msg = input_msg.value;

    if (!checkIsCapitalized(msg) && !checkSpecialCaracter(msg)) {
        switch (key) {
            case 'crypt':
                if (checkIsEmpty(msg)) {
                    showNotification('Por favor insira o texto a ser encriptado', 'error')
                } else if (checkIsEncrypted(msg)) {
                    showNotification('Texto ja está encriptado', 'error')
                } else {
                    encrypt(msg, board)
                    showNotification('Mensagem encriptada com sucesso')
                }
                break;
            case 'decrypt':
                if (checkIsEmpty(msg)) {
                    showNotification('Por favor insira texto a ser descriptado', 'error')
                } else if (!checkIsEncrypted(msg)) {
                    showNotification('Texto não esta criptografado', 'error')
                } else if (checkIsEncrypted(msg)) {
                    decrypt(msg, board)
                    showNotification('Texto descriptografo com sucesso')
                }
                break;
            case 'copy':
                if (!checkIsEmpty(board.innerText)) {
                    copyMsg(board)
                }
                break;
        }
    } else {
        showNotification('Caracter não permitido','error')
    }
}

button.forEach(button => {
    button.addEventListener('click', handleButton)
})