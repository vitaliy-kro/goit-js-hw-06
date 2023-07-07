"use strict";
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener('input', textContentToRender);
function textContentToRender() {
    var _a;
    if (outputEl)
        outputEl.textContent =
            (inputEl === null || inputEl === void 0 ? void 0 : inputEl.value.length) === 0 ? 'Anonymous' : (_a = inputEl === null || inputEl === void 0 ? void 0 : inputEl.value) !== null && _a !== void 0 ? _a : null;
}
//# sourceMappingURL=task-05.js.map