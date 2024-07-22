const items = document.querySelectorAll(".item");
const titleLength = document.querySelectorAll("h2").length;
console.log(`Number of categories: ${titleLength}`);
items.forEach((item) => {
  const textContent = item.firstElementChild.textContent;
  console.log(`Categories: ${textContent}`);
  const liItemsLength = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${liItemsLength}`);
});
