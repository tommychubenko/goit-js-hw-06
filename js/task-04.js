let counterValue = 0;


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

// counter.textContent = counterValue;

const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}




decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


console.log(counterValue);