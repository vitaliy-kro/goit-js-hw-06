const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
  switch (validationInput.value.length) {
    case Number(validationInput.dataset.length):
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
      break;
    case 0:
      validationInput.classList.remove('invalid');
      validationInput.classList.remove('valid');
      break;
    default:
      validationInput.classList.add('invalid');
  }
});
