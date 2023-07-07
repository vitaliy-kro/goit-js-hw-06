"use strict";
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const counter = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');
createButtonEl === null || createButtonEl === void 0 ? void 0 : createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl === null || destroyButtonEl === void 0 ? void 0 : destroyButtonEl.addEventListener('click', destroyBoxes);
function createBoxes() {
    clearBoxes();
    const markup = generateBoxesMarkup();
    divBoxesEl === null || divBoxesEl === void 0 ? void 0 : divBoxesEl.insertAdjacentHTML('beforeend', markup);
}
function clearBoxes() {
    if (divBoxesEl)
        divBoxesEl.innerHTML = '';
}
function generateBoxesMarkup() {
    const amount = Number(counter === null || counter === void 0 ? void 0 : counter.value);
    let elementSize = 20;
    let markup = '';
    for (let i = 1; i <= amount; i += 1) {
        elementSize += 10;
        const backgroundColor = generateRandomHexColor();
        const divElement = `<div class = "boxes__item" style="width:${elementSize}px; height:${elementSize}px; background-color:${backgroundColor} " ></div>`;
        markup += divElement;
    }
    return markup;
}
function generateRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function destroyBoxes() {
    clearBoxes();
}
//# sourceMappingURL=task-10.js.map