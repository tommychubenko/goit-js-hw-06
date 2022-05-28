const input = document.querySelector('#validation-input');

function checker(event) {    
    if (event.currentTarget.value.length > input.dataset.length) {
        console.log(`More than ${input.dataset.length} symbols `),
            this.classList.add('invalid'),
            this.classList.remove('valid')
    }

    else {
        this.classList.add('valid'),
        this.classList.remove('invalid')
    }
}

input.addEventListener('blur', checker);

