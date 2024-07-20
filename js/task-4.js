
const form = document.querySelector('.login-form');

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    const data = {
        email: email.value.trim(),
        password: password.value.trim(),
    }
    if (email.value.trim() === '' || password.value.trim() === '') {
    alert(`All form fields must be filled in`)
    } else {
        console.log(data) 
}
evt.currentTarget.reset()
}

