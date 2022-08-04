const categoriesItemEl = document.querySelectorAll('#categories > .item');
const numberOfCategories = el => `Number of categories: ${el.length}`;
console.log(numberOfCategories(categoriesItemEl));

const categoryNameEl = document.querySelectorAll('#categories > .item > h2');
categoryNameEl.forEach(element => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
