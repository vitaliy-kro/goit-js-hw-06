"use strict";
const decrementBtn = document.querySelector("[data-action = 'decrement']");
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector("[data-action = 'increment']");
decrementBtn === null || decrementBtn === void 0 ? void 0 : decrementBtn.addEventListener('click', () => {
    if (valueEl)
        valueEl.textContent = decrementByOne(convertToNumber(valueEl.textContent)).toString();
});
function convertToNumber(string) {
    return Number(string);
}
function decrementByOne(value) {
    if (value > 0) {
        value -= 1;
    }
    return value;
}
incrementBtn === null || incrementBtn === void 0 ? void 0 : incrementBtn.addEventListener('click', () => {
    if (valueEl)
        valueEl.textContent = incrementByOne(convertToNumber(valueEl.textContent)).toString();
});
function incrementByOne(value) {
    value += 1;
    return value;
}
//# sourceMappingURL=task-04.js.map