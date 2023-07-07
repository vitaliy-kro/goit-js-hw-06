"use strict";
const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
sizeControlEl === null || sizeControlEl === void 0 ? void 0 : sizeControlEl.addEventListener('input', event => {
    if (event.target instanceof HTMLInputElement)
        setTextElFontSize(event.target.value);
});
function setTextElFontSize(value) {
    if (textEl)
        textEl.style.fontSize = `${value}px`;
}
//# sourceMappingURL=task-07.js.map