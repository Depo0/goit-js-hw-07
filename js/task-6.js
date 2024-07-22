const input = document.querySelector("#controls input");
const boxesContainer = document.getElementById("boxes");

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = +input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", () => (boxesContainer.innerHTML = ""));

const createBoxes = (amount) => {
  boxesContainer.innerHTML = "";
  const boxes = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
  }).join("");
  boxesContainer.innerHTML = boxes;
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
