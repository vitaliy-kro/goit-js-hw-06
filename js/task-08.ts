const loginFormEl = document.querySelector<HTMLFormElement>('.login-form')!;
const inputElements =
  document.querySelectorAll<HTMLInputElement>('label > input');

loginFormEl.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(e: SubmitEvent) {
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

function getFormInputValues(form: HTMLFormElement) {
  const values = Array.from(form.elements).reduce<Record<string, string>>(
    (acc, element) => {
      if (element instanceof HTMLInputElement)
        acc[element.name] = element.value;
      return acc;
    },
    {}
  );
  console.log(values);
  return values;
}
