"use strict";
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(value => {
    const itemEl = document.createElement('li');
    itemEl.textContent = value;
    itemEl.classList.add('item');
    return itemEl;
});
ingredientsEl === null || ingredientsEl === void 0 ? void 0 : ingredientsEl.append(...elements);
//# sourceMappingURL=task-02.js.map