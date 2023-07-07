const validationInput =
  document.querySelector<HTMLInputElement>('#validation-input');
validationInput?.addEventListener('blur', validateInputByLength);

function validateInputByLength() {
  switch (validationInput?.value.length) {
    case Number(validationInput?.dataset.length):
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

function validationInputAddClass(param: string) {
  validationInput?.classList.add(param);
}

function validationInputRemoveClass(param: string) {
  validationInput?.classList.remove(param);
}
