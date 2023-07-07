"use strict";
const categoriesItemEl = document.querySelectorAll('#categories > .item');
const numberOfCategories = el => `Number of categories: ${el.length}`;
console.log(numberOfCategories(categoriesItemEl));
categoriesItemEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.firstElementChild.nextElementSibling.children.length}`);
});
