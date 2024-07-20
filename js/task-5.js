function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const click = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body')

click.addEventListener('click', handlerClick);

function handlerClick() {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
