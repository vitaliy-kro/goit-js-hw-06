"use strict";
const validationInput = document.querySelector('#validation-input');
validationInput === null || validationInput === void 0 ? void 0 : validationInput.addEventListener('blur', validateInputByLength);
function validateInputByLength() {
    switch (validationInput === null || validationInput === void 0 ? void 0 : validationInput.value.length) {
        case Number(validationInput === null || validationInput === void 0 ? void 0 : validationInput.dataset.length):
            validationInputAddClass('valid');
            validationInputRemoveClass('invalid');
            break;
        case 0:
            validationInputRemoveClass('invalid');
            validationInputRemoveClass('valid');
            break;
        default:
            validationInputAddClass('invalid');
    }
}
function validationInputAddClass(param) {
    validationInput === null || validationInput === void 0 ? void 0 : validationInput.classList.add(param);
}
function validationInputRemoveClass(param) {
    validationInput === null || validationInput === void 0 ? void 0 : validationInput.classList.remove(param);
}
//# sourceMappingURL=task-06.js.map