const inputRef = document.querySelector('#name-input');
const stringRef = document.querySelector('#name-output');

function sender(event) {
    event.currentTarget.value === "" ?
        stringRef.textContent = "Anonymous" :
        stringRef.textContent = event.currentTarget.value }

inputRef.addEventListener('keyup', sender)