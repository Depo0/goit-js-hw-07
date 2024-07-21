function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const newBox = document.querySelector(".box");

input.addEventListener("input", handleInput);
let inputResult = 0;
function handleInput(event) {
  inputResult = Number(event.currentTarget.value);
}

createButton.addEventListener("click", handlerCreate);
function handlerCreate() {
  if (inputResult >= 1 && inputResult <= 100) {
    boxes.innerHTML = "";
    createBoxes(inputResult);
    const items = Array.from(document.querySelectorAll(".box"));
    
    let size = 30;
    function biggerSize(index) {
      return size + index * 10;
    }

    items.forEach((item, index) => {
      item.style.backgroundColor = getRandomHexColor();
      const newSize = biggerSize(index);
      item.style.width = `${newSize}px`;
      item.style.height = `${newSize}px`;
    });
  }

  inputResult = 0;
  input.value = "";
}

function createBoxes(amount) {
  let boxHTML = "";
  for (let i = 1; i <= amount; i += 1) {
    boxHTML += `<div class="box"></div>`;
  }
  boxes.insertAdjacentHTML("beforeend", boxHTML);
}

destroyButton.addEventListener("click", handlerDestroy);
function handlerDestroy() {
  boxes.innerHTML = "";
}