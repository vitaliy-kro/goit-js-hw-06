"use strict";
const loginFormEl = document.querySelector('.login-form');
const inputElements = document.querySelectorAll('label > input');
loginFormEl.addEventListener('submit', onLoginFormSubmit);
function onLoginFormSubmit(e) {
    e.preventDefault();
    if (checkIsAnyInputEmpty()) {
        return alert('Write all fields');
    }
    getFormInputValues(loginFormEl);
    loginFormEl.reset();
}
function checkIsAnyInputEmpty() {
    return Array.from(inputElements).some(({ value }) => !value.length);
}
function getFormInputValues(form) {
    const values = Array.from(form.elements).reduce((acc, element) => {
        if (element instanceof HTMLInputElement)
            acc[element.name] = element.value;
        return acc;
    }, {});
    console.log(values);
    return values;
}
//# sourceMappingURL=task-08.js.map