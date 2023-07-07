"use strict";
const categoriesItemEl = document.querySelectorAll('#categories > .item');
const numberOfCategories = (el) => `Number of categories: ${el.length}`;
console.log(numberOfCategories(categoriesItemEl));
categoriesItemEl.forEach(element => {
    var _a, _b, _c;
    console.log(`Category: ${(_a = element === null || element === void 0 ? void 0 : element.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent}`);
    console.log(`Elements: ${(_c = (_b = element === null || element === void 0 ? void 0 : element.firstElementChild) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.children.length}`);
});
//# sourceMappingURL=task-01.js.map