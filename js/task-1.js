


const listCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategories.length}`);




listCategories.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    const listOfCategory = element.querySelectorAll('ul li');
    console.log(`Elements: ${listOfCategory.length}`);
});













