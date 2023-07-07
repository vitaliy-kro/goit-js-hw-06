"use strict";
const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn === null || changeColorBtn === void 0 ? void 0 : changeColorBtn.addEventListener('click', getRandomHexColor);
function getRandomHexColor() {
    const currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setHexColorForBodyAndSpan(currentColor);
}
function setHexColorForBodyAndSpan(color) {
    if (colorValueEl)
        colorValueEl.textContent = color;
    if (bodyEl)
        bodyEl.style.backgroundColor = color;
}
//# sourceMappingURL=task-09.js.map