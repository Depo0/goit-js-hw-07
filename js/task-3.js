const inputUserName = document.querySelector('#name-input');
const span = document.querySelector('#name-output')

inputUserName.addEventListener("input", handlerInput);

function handlerInput(evt) {
    if (evt.currentTarget.value.trim() === '') {
        span.textContent = "Anonymous";
        
    }
    else {
        span.textContent = evt.currentTarget.value.trim();
    }
}