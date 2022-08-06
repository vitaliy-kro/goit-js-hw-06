const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
  switch (validationInput.value.length) {
    case Number(validationInput.dataset.length):
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
});

const validationInputAddClass = param => validationInput.classList.add(param);

const validationInputRemoveClass = param =>
  validationInput.classList.remove(param);
