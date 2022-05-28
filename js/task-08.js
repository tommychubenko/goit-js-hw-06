const form = document.querySelector('.login-form');
const userData = [];

function submitting(event){
    event.preventDefault();
    const { email, password } = form;
    
    if (email.value && password.value !== "" )    
    {
        console.log('Hurray! You succesfully enterd a valid data!')
        userData.push({ 'email': email.value, 'password': password.value }),
    console.log('Now, in user list we have next:', userData)}

    else {alert("Ooops.... Please fill all the fields!")}

    
    // console.log('Pushed');
    // console.log(form.email.value)

};


form.addEventListener("submit", submitting);