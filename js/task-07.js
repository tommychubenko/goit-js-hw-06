const range = document.querySelector('#font-size-control');
// console.log(range.value);

const text = document.querySelector('#text');
// console.log(text.textContent);

function fontChanger(event) {
    text.style.fontSize = (`${event.currentTarget.value}px`)
}


range.addEventListener('change', fontChanger)
