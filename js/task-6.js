function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function generateDivSqueres(count) {
  let createDivSquer = '';
  for (let i = 0; i < count; i += 1) {
    createDivSquer += `<div style=' background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px;'></div>`;
  }
  return createDivSquer;
}

function destroySqueres() {
  const squeres = boxes.querySelectorAll('div');
  squeres.forEach(element => {
    element.remove();
  });
}

const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');

create.addEventListener('click', () => {
  if (input.value < 1 || input.value > 100)
    return alert('Значення повинно бути від 1 до 100');
  destroySqueres();
  boxes.insertAdjacentHTML('beforeend', generateDivSqueres(input.value));
});

destroy.addEventListener('click', () => {
  destroySqueres();
});