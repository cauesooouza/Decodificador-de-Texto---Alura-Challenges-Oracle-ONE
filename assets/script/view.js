export const input_msg = document.getElementById('input_msg');
export const button = document.querySelectorAll('button');
export const board = document.getElementById('whiteboard');
export const toBeEmpty = document.getElementById('toBeEmpty');
export const aside = document.querySelector('aside');

export const insertText = (boardElement, message) => {
    boardElement.innerHTML = message;
}

export const changeDisplay = (boardElement, value) => {
    boardElement.style.display = value;
}

export const changeJustifyContent = (boardElement, value) => {
    boardElement.style.changeJustifyContent = value;
}

export const showNotification = (text, type) => {
    if (type === 'error') {
        Toastify({
            text: `${text}`,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "red",
            }
        }).showToast();
    } else {
        Toastify({
            text: `${text}`,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "#072b61",
            }
        }).showToast();
    }
}